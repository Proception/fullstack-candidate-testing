import NavigationMenu from '../NavigationMenu/index';
import Footer from '../Footer/index';

const Index = ({children}) => {
  return <div className="bg-gray-100">
    <NavigationMenu />
    {children}
    <Footer />
  </div>
}
export default Index
