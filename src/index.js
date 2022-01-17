import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <div>
        <img src="http://img.zhufengpeixun.cn/zhufengjg.jpg" width="100%"></img>
        <button>点我</button>
    </div>,
    document.getElementById('root')
);
document.getElementById('root').innerHTML = `div>
<img src="http://img.zhufengpeixun.cn/zhufengjg.jpg" width="100%"></img>
<button>点我</button>
</div>`