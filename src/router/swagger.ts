import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const router = Router();

// Load your Swagger YAML file
const swaggerFilePath = path.join(__dirname, '../../swagger.yaml');
const swaggerDocument = yaml.load(fs.readFileSync(swaggerFilePath, 'utf8'));

// Serve Swagger UI using swagger-ui-express
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;