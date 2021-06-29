import React from 'react'
//import { homeObjOne, homeObjTwo, homeObjThree} from './Data';
import { AboutContainer,AboutImage,AboutItems,Name,AboutWrapper } from './design';


const About = () => {
    return (
        <>
        <AboutContainer>
            <AboutWrapper>
               
                <AboutItems>
                    <AboutImage ></AboutImage>
                    <Name>Gogu Vineeth Kumar</Name>
                </AboutItems>

                <AboutItems>
                    <AboutImage ></AboutImage>
                    <Name>Peroji Ramana Kishore</Name>
                </AboutItems>

                <AboutItems>
                    <AboutImage ></AboutImage>
                    <Name>Bari Srikanth</Name>
                </AboutItems>

                <AboutItems>
                    <AboutImage ></AboutImage>
                    <Name>Mathangi Sravan</Name>
                </AboutItems>

            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default About
