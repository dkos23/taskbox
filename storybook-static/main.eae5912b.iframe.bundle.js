(self.webpackChunkintro_storybook_react_template=self.webpackChunkintro_storybook_react_template||[]).push([[179],{"./src/components/InboxScreen.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Error:function(){return Error},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return InboxScreen_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./src/lib/store.js"),TaskList=__webpack_require__("./src/components/TaskList.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InboxScreen(){var dispatch=(0,es.I0)(),error=(0,es.v9)((function(state){return state.taskbox})).error;return(0,react.useEffect)((function(){dispatch((0,store.Jv)())}),[]),error?(0,jsx_runtime.jsx)("div",{className:"page lists-show",children:(0,jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[(0,jsx_runtime.jsx)("span",{className:"icon-face-sad"}),(0,jsx_runtime.jsx)("p",{className:"title-message",children:"Oh no!"}),(0,jsx_runtime.jsx)("p",{className:"subtitle-message",children:"Something went wrong"})]})}):(0,jsx_runtime.jsxs)("div",{className:"page lists-show",children:[(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsx)("h1",{className:"title-page",children:"Taskbox"})}),(0,jsx_runtime.jsx)(TaskList.Z,{})]})}InboxScreen.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\InboxScreen.js"]={name:"InboxScreen",docgenInfo:InboxScreen.__docgenInfo,path:"src\\components\\InboxScreen.js"});var lib=__webpack_require__("./node_modules/msw/lib/index.js"),TaskList_stories=__webpack_require__("./src/components/TaskList.stories.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),InboxScreen_stories={component:InboxScreen,title:"InboxScreen",decorators:[function(story){return(0,jsx_runtime.jsx)(es.zt,{store:store.ZP,children:story()})}]},Template=function Template(){return(0,jsx_runtime.jsx)(InboxScreen,{})},Default=Template.bind({});Default.parameters={msw:{handlers:[lib.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.json(TaskList_stories.MockedState.tasks))}))]}};var Error=Template.bind({});Error.parameters={msw:{handlers:[lib.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.status(403))}))]}},Default.play=function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(_ref){var canvasElement,canvas;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context2.t0=esm.mz,_context2.next=5,canvas.findByTestId("loading");case 5:return _context2.t1=_context2.sent,_context2.next=8,(0,_context2.t0)(_context2.t1);case 8:return _context2.next=10,(0,esm.X_)((0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,esm.BX.click(canvas.getByLabelText("pinTask-1"));case 2:return _context.next=4,esm.BX.click(canvas.getByLabelText("pinTask-3"));case 4:case"end":return _context.stop()}}),_callee)}))));case 10:case"end":return _context2.stop()}}),_callee2)})));return function(_x){return _ref2.apply(this,arguments)}}(),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <InboxScreen />"}},Default.parameters),Error.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <InboxScreen />"}},Error.parameters);var __namedExportsOrder=["Default","Error"]},"./src/components/Task.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:function(){return Archived},Default:function(){return Default},Pinned:function(){return Pinned},__namedExportsOrder:function(){return __namedExportsOrder}});var D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Task__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Task"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_1__.Z,(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};var Pinned=Template.bind({});Pinned.args={task:(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters);var __namedExportsOrder=["Default","Pinned","Archived"]},"./src/components/TaskList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Empty:function(){return Empty},Loading:function(){return Loading},MockedState:function(){return MockedState},WithPinnedTasks:function(){return WithPinnedTasks},__namedExportsOrder:function(){return __namedExportsOrder}});var D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_TaskList__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/TaskList.js")),_Task_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Task.stories.js"),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),MockedState={tasks:[(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"1",title:"Task 1"}),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"2",title:"Task 2"}),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"3",title:"Task 3"}),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"4",title:"Task 4"}),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"5",title:"Task 5"}),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args.task),{},{id:"6",title:"Task 6"})],status:"idle",error:null},Mockstore=function Mockstore(_ref){var taskboxState=_ref.taskboxState,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.zt,{store:(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.xC)({reducer:{taskbox:(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.oM)({name:"taskbox",initialState:taskboxState,reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}}}).reducer}}),children:children})};__webpack_exports__.default={component:_TaskList__WEBPACK_IMPORTED_MODULE_1__.Z,title:"TaskList",decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{padding:"3rem"},children:story()})}],excludeStories:/.*MockedState$/};var Template=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TaskList__WEBPACK_IMPORTED_MODULE_1__.Z,{})},Default=Template.bind({});Default.decorators=[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mockstore,{taskboxState:MockedState,children:story()})}];var WithPinnedTasks=Template.bind({});WithPinnedTasks.decorators=[function(story){var pinnedtasks=[].concat((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(MockedState.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mockstore,{taskboxState:(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},MockedState),{},{tasks:pinnedtasks}),children:story()})}];var Loading=Template.bind({});Loading.decorators=[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mockstore,{taskboxState:(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},MockedState),{},{status:"loading"}),children:story()})}];var Empty=Template.bind({});Empty.decorators=[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Mockstore,{taskboxState:(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},MockedState),{},{tasks:[]}),children:story()})}],Default.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({storySource:{source:"() => <TaskList />"}},Default.parameters),WithPinnedTasks.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({storySource:{source:"() => <TaskList />"}},WithPinnedTasks.parameters),Loading.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({storySource:{source:"() => <TaskList />"}},Loading.parameters),Empty.parameters=(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({storySource:{source:"() => <TaskList />"}},Empty.parameters);var __namedExportsOrder=["MockedState","Default","WithPinnedTasks","Loading","Empty"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},decorators:function(){return decorators},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),dist=__webpack_require__("./node_modules/msw-storybook-addon/dist/index.js");(0,dist.initialize)();var decorators=[dist.mswDecorator],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["decorators","parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/Task.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Task}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"list-item ".concat(state),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:"checked","aria-label":"archiveTask-".concat(id),className:"checkbox",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:"archiveTask-".concat(id),checked:"TASK_ARCHIVED"===state}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{htmlFor:"title","aria-label":title,className:"title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",placeholder:"Input title"})}),"TASK_ARCHIVED"!==state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"pin-button",onClick:function onClick(){return onPinTask(id)},id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"icon-star"})},"pinTask-".concat(id))]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src\\components\\Task.js"})},"./src/components/TaskList.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return TaskList}});var D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_Task__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_lib_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/store.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TaskList(){var tasks=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((function(state){return[].concat((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"!==t.state})))).filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))})),status=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((function(state){return state.taskbox})).status,dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.I0)(),LoadingRow=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"loading-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"glow-checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:"glow-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"Loading"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"cool"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"state"})]})]});return"loading"===status?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"list-items","data-testid":"loading",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]},"loading"):0===tasks.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"list-items","data-testid":"empty",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"wrapper-message",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"icon-check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"title-message",children:"You have no tasks"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"list-items","data-testid":"success",children:tasks.map((function(task){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_1__.Z,{task:task,onPinTask:function onPinTask(task){return function pinTask(value){dispatch((0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.V7)({id:value,newTaskState:"TASK_PINNED"}))}(task)},onArchiveTask:function onArchiveTask(task){return function archiveTask(value){dispatch((0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.V7)({id:value,newTaskState:"TASK_ARCHIVED"}))}(task)}},task.id)}))},"success")}TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src\\components\\TaskList.js"})},"./src/lib/store.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Jv:function(){return fetchTasks},V7:function(){return updateTaskState}});var D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),fetchTasks=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.hg)("todos/fetchTodos",(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().mark((function _callee(){var response,data,result;return(0,D_DEV_React_Projects_taskbox_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("https://jsonplaceholder.typicode.com/todos?userId=1");case 2:return response=_context.sent,_context.next=5,response.json();case 5:return data=_context.sent,result=data.map((function(task){return{id:"".concat(task.id),title:task.title,state:task.completed?"TASK_ARCHIVED":"TASK_INBOX"}})),_context.abrupt("return",result);case 8:case"end":return _context.stop()}}),_callee)})))),TasksSlice=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.oM)({name:"taskbox",initialState:{tasks:[],status:"idle",error:null},reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}},extraReducers:function extraReducers(builder){builder.addCase(fetchTasks.pending,(function(state){state.status="loading",state.error=null,state.tasks=[]})).addCase(fetchTasks.fulfilled,(function(state,action){state.status="succeeded",state.error=null,state.tasks=action.payload})).addCase(fetchTasks.rejected,(function(state){state.status="failed",state.error="Something went wrong",state.tasks=[]}))}}),updateTaskState=TasksSlice.actions.updateTaskState,store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.xC)({reducer:{taskbox:TasksSlice.reducer}});__webpack_exports__.ZP=store},"./src/components sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./InboxScreen.stories.js":"./src/components/InboxScreen.stories.js","./Task.stories.js":"./src/components/Task.stories.js","./TaskList.stories.js":"./src/components/TaskList.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[888],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);