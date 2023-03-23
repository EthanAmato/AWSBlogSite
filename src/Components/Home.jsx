import {
    Button,
    Flex,
    Heading,
    Image,
    Link as AmplifyLink,
    Text,
    View,
} from '@aws-amplify/ui-react';
import student from '../assets/student.png'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <View className="App">
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Heading level={1} marginLeft={"5%"}>Notable</Heading>
                <Link to={"/notes"} style={{ textDecoration: "none", marginRight: "5%"}}><AmplifyLink fontSize={"2em"} alignSelf={"flex-end"} marginRight={"5%"}>Login</AmplifyLink></Link>
            </Flex>
            <View as="form" margin="3rem 0">
                <Flex direction="column" justifyContent="center" alignItems={"center"} gap={'1.5em'}>
                    <Heading level={2} width={"75%"} textAlign={"center"}>Your One-Stop-Shop for All your Notetaking Needs</Heading>
                    <Image src={student} borderRadius={'2em'} />
                    <Link to={"/notes"} style={{textDecoration:"none"}}><Button>Click here to Get Started</Button></Link>
                </Flex>
            </View>
        </View>
    );
}