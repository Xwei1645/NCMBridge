import React from 'react';
import ReactDOM from 'react-dom';

// ����һ���򵥵� React �������ʾ��Ϣ
function Info() {
    console.log('Info �����Ⱦ'); // ��ӵ�����Ϣ
    return (
        <div style={{ textAlign: 'center', color: 'gray', marginTop: '20px' }}>
            Written by Xwei with Copilot
        </div>
    );
}

// ���ò�����ý���
(() => {
    function Config() {
        console.log('Config �����Ⱦ'); // ��ӵ�����Ϣ
        return (
            <div>
                <Info />
            </div>
        );
    }

    plugin.onConfig(() => {
        console.log("Config function called"); // ��ӵ�����Ϣ
        const element = document.createElement("div");
        ReactDOM.render(<Config />, element);
        return element;
    });
})();

// ȷ�����ϵͳ��ȷ����
window.addEventListener('DOMContentLoaded', async () => {
    console.log('���ϵͳ����'); // ��ӵ�����Ϣ
    // ��������...
});
