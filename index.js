/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Animations from './components/Animations';
import MultipleAnimation from './components/MultipleAnimation';
import SequenceAnimation from './components/SquenceAnimation';
import StaggerAnimation from './components/StaggerAnimation';
import Loading from './components/Loading';
import Animate from './components/Animated';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>App);
