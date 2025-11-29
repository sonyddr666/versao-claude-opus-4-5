// index.js - GitHub AI Automation Bot v2.0
import fetch from 'node-fetch';
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import crypto from 'crypto';

// ============================================================================
// 🔧 CONFIGURAÇÃO AVANÇADA
// ============================================================================
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const CONFIG = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET || '',
  REPO_OWNER: process.env.REPO_OWNER || 'sonyddr666',
  REPO_NAME: process.env.REPO_NAME || 'teste',
  CHECK_INTERVAL: parseInt(process.env.CHECK_INTERVAL || '300000', 10),
  BRANCH: process.env.BRANCH || 'main',
  DRY_RUN: process.env.DRY_RUN === 'true',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '100000', 10),
  RATE_LIMIT_DELAY: parseInt(process.env.RATE_LIMIT_DELAY || '1000', 10),
  MAX_ACTIONS_PER_ISSUE: parseInt(process.env.MAX_ACTIONS_PER_ISSUE || '10', 10),
  ALLOWED_EXTENSIONS: (process.env.ALLOWED_EXTENSIONS || 'html,css,js,json,md,txt,py,jsx,tsx,ts,vue,xml,yaml,yml').split(','),
  BLOCKED_PATHS: (process.env.BLOCKED_PATHS || '.env,.git,node_modules,package-lock.json').split(',')
};

// [Continue com todo o código do arquivo index.js fornecido...]