import Database from "better-sqlite3";
import path from "path";

const DB_PATH = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "orders.db");

let db: Database.Database | null = null;

function ensureDataDirectory() {
  const fs = require("fs");
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getDb(): Database.Database {
  if (!db) {
    ensureDataDirectory();
    db = new Database(DB_PATH);
    
    db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stripe_session_id TEXT UNIQUE NOT NULL,
        email TEXT NOT NULL,
        amount INTEGER NOT NULL,
        currency TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'completed',
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        metadata TEXT
      )
    `);
    
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email)
    `);
    
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_orders_stripe_session ON orders(stripe_session_id)
    `);
  }
  
  return db;
}

export interface Order {
  id: number;
  stripe_session_id: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  created_at: string;
  metadata: string | null;
}

export function createOrder(
  stripeSessionId: string,
  email: string,
  amount: number,
  currency: string,
  metadata?: Record<string, unknown>
): Order {
  const db = getDb();
  
  const stmt = db.prepare(`
    INSERT INTO orders (stripe_session_id, email, amount, currency, metadata)
    VALUES (?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(
    stripeSessionId,
    email,
    amount,
    currency,
    metadata ? JSON.stringify(metadata) : null
  );
  
  return getOrderById(result.lastInsertRowid as number)!;
}

export function getOrderById(id: number): Order | null {
  const db = getDb();
  const stmt = db.prepare("SELECT * FROM orders WHERE id = ?");
  return stmt.get(id) as Order | null;
}

export function getOrderByStripeSession(sessionId: string): Order | null {
  const db = getDb();
  const stmt = db.prepare("SELECT * FROM orders WHERE stripe_session_id = ?");
  return stmt.get(sessionId) as Order | null;
}

export function getAllOrders(): Order[] {
  const db = getDb();
  const stmt = db.prepare("SELECT * FROM orders ORDER BY created_at DESC");
  return stmt.all() as Order[];
}
