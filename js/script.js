// =======
// ======

window.addEventListener('load', function() {

    var btnSendLeft = document.querySelector('#btn-send-left')
    var btnSendRight = document.querySelector('#btn-send-right')

    var inputLeft = document.querySelector('#btn-input-left');
    var inputRight = document.querySelector('#btn-input-right');

    var btnBoldLeft = document.querySelector('.btn-bold-left');
    var btnItalicLeft = document.querySelector('.btn-italic-left');
    var btnResetLeft = document.querySelector('.btn-reset-left');

    var btnBoldRight = document.querySelector('.btn-bold-right');
    var btnItalicRight = document.querySelector('.btn-italic-right');
    var btnResetRight = document.querySelector('.btn-reset-right');
    
    btnBoldLeft.addEventListener('click', function() {
        btnBoldLeft.classList.toggle('active');
        if (btnBoldLeft.classList.contains('active')) {
            inputLeft.innerHTML = `<b>${inputLeft.innerHTML}</b>`
        } else {
            let inputParent = inputLeft.querySelector('b').parentElement;
            inputParent.innerHTML = inputParent.querySelector('b').innerHTML;
        }
        document.querySelector('#btn-input-left').focus();
    })

    btnItalicLeft.addEventListener('click', function() {
        btnItalicLeft.classList.toggle('active');
        if (btnItalicLeft.classList.contains('active')) {
            inputLeft.innerHTML = `<i>${inputLeft.innerHTML}</i>`
        } else {
            let inputParent = inputLeft.querySelector('i').parentElement;
            inputParent.innerHTML = inputParent.querySelector('i').innerHTML;
        }
        document.querySelector('#btn-input-left').focus();
    })

    var resetLeft = function() {
        btnBoldLeft.classList.remove('active');
        btnItalicLeft.classList.remove('active');
        document.querySelector('#btn-input-left').innerHTML = '';
    }

    btnResetLeft.addEventListener('click', function() {
        resetLeft();
    })

    btnSendLeft.addEventListener('click', function() {
        var inputLeft = document.querySelector('#btn-input-left');
        if(inputLeft.innerText.trim() === '') {
            return;
        }
        var e1 = document.createElement('div');
        e1.classList.add('col-sm-11');
        var msgContent = inputLeft.innerHTML
        e1.innerHTML = `
            <div class="msg msg-left">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-left').appendChild(e1);
        
        var e2 = document.createElement('div');
        e2.classList.add('col-sm-11');
        var msgContent = inputLeft.innerHTML
        e2.innerHTML = `
            <div class="msg msg-right">
                ${msgContent}
            </div>`;
        
        
        document.querySelector('#msg-chat-right').appendChild(e2);
        resetLeft();
    })


    // Right ChatBox
    btnBoldRight.addEventListener('click', function() {
        btnBoldRight.classList.toggle('active');
        if (btnBoldRight.classList.contains('active')) {
            inputRight.innerHTML = `<b>${inputRight.innerHTML}</b>`
        } else {
            let inputParent = inputRight.querySelector('b').parentElement;
            inputParent.innerHTML = inputParent.querySelector('b').innerHTML;
        }
        document.querySelector('#btn-input-right').focus();
    })

    btnItalicRight.addEventListener('click', function() {
        btnItalicRight.classList.toggle('active');
        if (btnItalicRight.classList.contains('active')) {
            inputRight.innerHTML = `<i>${inputRight.innerHTML}</i>`
        } else {
            let inputParent = inputRight.querySelector('i').parentElement;
            inputParent.innerHTML = inputParent.querySelector('i').innerHTML;
        }
        document.querySelector('#btn-input-right').focus();
    })
    
    var resetRight = function() {
        btnBoldRight.classList.remove('active');
        btnItalicRight.classList.remove('active');
        document.querySelector('#btn-input-right').innerHTML = '';
    }

    btnResetRight.addEventListener('click', function() {
        resetRight();
    })

    btnSendRight.addEventListener('click', function() {
        var inputRight = document.querySelector('#btn-input-right');
        if(inputRight.innerText.trim() === '') {
            return;
        }
        var e1 = document.createElement('div');
        e1.classList.add('col-sm-11');
        var msgContent = inputRight.innerHTML
        e1.innerHTML = `
            <div class="msg msg-left">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-right').appendChild(e1);
        
        var e2 = document.createElement('div');
        e2.classList.add('col-sm-11');
        var msgContent = inputRight.innerHTML
        e2.innerHTML = `
            <div class="msg msg-right">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-left').appendChild(e2);
    })

    document.querySelector('#btn-reset-right').addEventListener('click', function() {
        document.querySelector('#btn-input-right').innerHTML = '';
    })
    resetLeft();
})
