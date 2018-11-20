import Menu from '../components/menu';
import Footer from '../components/footer';

export default ({ children }) => (
  <div>
    <Menu />
    { children }
    <Footer />
  </div>
)
