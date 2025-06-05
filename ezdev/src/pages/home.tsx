import WelcomeMessage from "../components/welcome";
import Layout from "../layout/layout";


const Home: React.FC = () => {
  return (
    <Layout>
       <div className="w-full h-full flex flex-col items-center justify-center">
         <p>Welcome to EZdev</p>
         <WelcomeMessage />
      </div>
    </Layout>
  )
}

export default Home;