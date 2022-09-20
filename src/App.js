import { ToastProvider, useToast } from 'toast-lib-modsen'
import { Button } from './styled'

function App() {
  const { info, warning, error, success } = useToast();

  return (
    <div className="App">
      <Button data-test-id="btn-info-toast" onClick={() => info('Info toast example')}>
        Add info toast
      </Button>
      <Button data-test-id="btn-warning-toast" onClick={() => warning('Warning toast example')}>
        Add warning toast
      </Button>
      <Button data-test-id="btn-error-toast" onClick={() => error('Error toast example')}>
        Add error toast
      </Button>
      <Button data-test-id="btn-success-toast" onClick={() => success('Success toast example')}>
        Add success toast
      </Button>
      <ToastProvider />
    </div>
  );
}

export default App;
