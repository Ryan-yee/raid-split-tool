import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

window.Electron.ipcRenderer.once('ipc-example', (arg) => {
    console.log(arg);
});
window.Electron.ipcRenderer.send('ipc-example', ['ping']);