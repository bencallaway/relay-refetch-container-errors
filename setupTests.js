import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { queryMock, TEST_GRAPHQL_URL } from './src/helpers';

configure({ adapter: new Adapter() });

queryMock.setup(TEST_GRAPHQL_URL);

beforeEach(() => queryMock.reset());
