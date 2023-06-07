import {Container} from 'inversify';
import SvgEditorService from './services/SvgEditorService';
import {ISvgEditorService} from './services/ISvgEditorService';

const container = new Container();

container.bind<ISvgEditorService>("ISvgEditorService").to(SvgEditorService).inSingletonScope();

export default container;