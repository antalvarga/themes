import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import {StatusBar} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../../redux/themeAction';
import {lightTheme, darkTheme } from '../../Theme';


export default function HomeScreen() {
    const theme= useSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch();

  return (

    <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
        <Container>

            <TextContainer>
                <Text>Welcome Hello World!</Text>
            </TextContainer>
            
            <TextContainer2>
                <Text2>Welcome Hello World!</Text2>
            </TextContainer2>

            <TextContainer3>
                <Text3>Welcome Hello World!</Text3>
            </TextContainer3>


            {theme.mode == 'light' ? (
                <Button onPress={() => dispatch(switchTheme(darkTheme))}>
                    <ButtonText>Change to dark theme</ButtonText>
                </Button>
            ) : (
                <Button onPress={() => dispatch(switchTheme(lightTheme))}>
                    <ButtonText>Change to light theme</ButtonText>
                </Button>
            )}

        </Container>

    </ThemeProvider>
  );
}

const Container = styled.View`
    flex:1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #ffffff;
    backgroundColor: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR };
`;

const TextContainer = styled.View`
    border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR };
    padding: 16px;
    borderRadius: 6px;
    marginBottom: 10px;
`;

const TextContainer2 = styled.View`
    border: 1px solid ${(props) => props.theme.SECONDARY_TEXT_COLOR };
    padding: 16px;
    borderRadius: 6px;
    marginBottom: 10px;
`;

const TextContainer3 = styled.View`
    border: 1px solid ${(props) => props.theme.THIRD_TEXT_COLOR };
    padding: 16px;
    borderRadius: 6px;
    marginBottom: 10px;
`;

const TextContainer4 = styled.View`
    border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR };
    padding: 16px;
    borderRadius: 6px;
`;


const Text = styled.Text`
    color: ${(props) => props.theme.PRIMARY_TEXT_COLOR };
    fontSize: 24px;
    fontWeight: 600;
`;

const Text2 = styled.Text`
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR };
    fontSize: 24px;
    fontWeight: 600;
`;

const Text3 = styled.Text`
    color: ${(props) => props.theme.THIRD_TEXT_COLOR };
    fontSize: 24px;
    fontWeight: 600;
`;

const Button = styled.TouchableOpacity`
    margin: 32px 0;
    backgroundColor: ${(props) => props.theme.PRIMARY_BUTTON_COLOR };
    padding: 16px 32px;
    borderRadius: 6px;

`;

const ButtonText = styled.Text`
    fontSize: 16px;
    fontWeight: 500;
    color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR };
`;
