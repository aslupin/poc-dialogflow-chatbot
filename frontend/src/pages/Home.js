import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentCondition  from '../components/ContentCondition'
import AnimalList from '../components/AnimalList'
import AndroidDownload from '../components/AndroidDownload'

const HomePage = () => {
	return (
		<>
			<Header />
			<ContentCondition />
            <AndroidDownload />
            {/* <AnimalList type="แมว"/> 
            <AnimalList type="สุนัข"/> */}
			<Footer />
		</>
	)
}

export default HomePage
