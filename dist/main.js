import React from 'react';
import ReactDOM from 'react-dom';

// 创建一个简单的 React 组件来显示信息
function Info() {
    console.log('Info 组件渲染'); // 添加调试信息
    return (
        <div style={{ textAlign: 'center', color: 'gray', marginTop: '20px' }}>
            Written by Xwei with Copilot
        </div>
    );
}

// 配置插件设置界面
(() => {
    function Config() {
        console.log('Config 组件渲染'); // 添加调试信息
        return (
            <div>
                <Info />
            </div>
        );
    }

    plugin.onConfig(() => {
        console.log("Config function called"); // 添加调试信息
        const element = document.createElement("div");
        ReactDOM.render(<Config />, element);
        return element;
    });
})();

// 确保插件系统正确加载
window.addEventListener('DOMContentLoaded', async () => {
    console.log('插件系统加载'); // 添加调试信息
    // 其他代码...
});
