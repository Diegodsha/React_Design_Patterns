// import CurrentUserLoader from "./CurrentUserLoader"
// import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import DataSource from './DataSource';
import axios from 'axios';

const getServerData = url => async()=>{
    const response = await axios.get(url)
    return response.data
}

const getLocalStorageData = (key)=> () => localStorage.getItem(key)

const Hello = ({message}) => <h1>{message}</h1>

export const App = () => {
  return (
    <>
      {/* <ResourceLoader resourceUrl="/users/1" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1" resourceName="product">
        <ProductInfo />
      </ResourceLoader> */}
      <DataSource getDataFunc={getServerData('/users/1')} resourceName='user'>
        <UserInfo />
      </DataSource>
      <DataSource getDataFunc={getServerData('/products/1')} resourceName='product'>
        <ProductInfo />
      </DataSource>
      <DataSource getDataFunc={getLocalStorageData('message')} resourceName='message'>
        <Hello />
      </DataSource>
    </>
  );
};

export default App;
