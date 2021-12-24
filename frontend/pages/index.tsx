import Header from '../components/header'
import Features from '../components/features'
import Tokenomics from '../assets/tokenomics'



export default function Index() {
  return <>
    <Header />
    <Features />
    <div className='bg-blue-400 flex justify-center py-16 '>
      <Tokenomics />
    </div>

  </> 
}
