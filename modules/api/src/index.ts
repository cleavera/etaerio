import { init } from '@skimp/quickstart';
import * as path from 'path';
import './schemas';

(async(): Promise<void> => {
    await init(8081, path.join(__dirname, '../../../data'), []);
})();
