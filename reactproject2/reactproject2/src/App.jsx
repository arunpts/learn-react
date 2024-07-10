import Header from "./Header.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Button from "./Button/Button.jsx";
import UserGreeting from "./UserGreeting.jsx"
import Footer from "./Footer.jsx"
function App() {

    return (
        <>
            <Header />
            <Food />
            <div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div> 
            <Student name="Arun" age={30} isStudent={true} />  {/*props*/}
            <Student name="Pat" age={42} isStudent={false} />  
            <Student name="Jogn" age={50} isStudent={false} />  
            <Student name="Sandy" age={50} isStudent={true} />  
            <Student />  
            <Student name="Larry"/>  
            <Button />
            <UserGreeting isLogged={true} userName="arun" />
            {/*<UserGreeting isLogged={false} />*/}
            <Footer />
        </>
    );
}

export default App
