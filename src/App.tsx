import EmporixProvider from "./EmporixProvider.tsx";
import {EmporixRegisterClient} from "./EmporixRegisterClient.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OrderSearch} from "./OrderSearch.tsx";

export default function App() {
  return (
      <EmporixProvider>
        <EmporixRegisterClient>
          <OrderSearch />
        </EmporixRegisterClient>
      </EmporixProvider>
  )
}

