const electron=require('electron')
var net = electron.remote.net;

// Electron 참고 : https://www.electronjs.org/docs/api/client-request

document.addEventListener('DOMContentLoaded', function () {

    // post 방식 restful 요청.
    var post = document.getElementById('btn_post');
    post.addEventListener('click', () => {

        // 버튼 클릭시, 새로운 시간으로 설정한다.
        var body = JSON.stringify(input_time());

        // const req = net.request({
        //     method: 'POST',
        //     protocol: 'http:',
        //     hostname: '121.160.17.87',
        //     path: '/hrm/setFireSensing',
        //     port: '13000',
        //     redirect: 'follow'
        // });

        const req = create_request();

        req.on('response', (response) => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

            response.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`)
            });
        });
        req.on('finish', () => {
            console.log('Request is Finished')
        });
        req.on('abort', () => {
            console.log('Request is Aborted')
        });
        req.on('error', (error) => {
            console.log(`ERROR: ${JSON.stringify(error)}`)
        });
        req.on('close', (error) => {
            console.log('Last Transaction has occured')
        });
        req.setHeader('Content-Type', 'application/json');

        req.write(body, 'utf-8');

        req.end();
    });


    const format_setting = document.getElementById('input_body');
    format_setting.innerHTML = JSON.stringify(fireSensing_format);


    const time = document.getElementById('timestamp');
    const timeUpdate = setInterval(function (){
        time.innerHTML = String(Date.now());
    },1000)


    // get 방식 restful 요청. 미사용
    var get = document.getElementById('btn_get');
    get.addEventListener('click', () => {
        const req = net.request({
            method: 'GET',
            protocol: 'http:',
            hostname: 'httpbin.org',
            path: '/get',
            redirect: 'follow'
        });
        req.on('response', (response) => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

            response.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`)
            });
        });
        req.on('finish', () => {
            console.log('Request is Finished')
        });
        req.on('abort', () => {
            console.log('Request is Aborted')
        });
        req.on('error', (error) => {
            console.log(`ERROR: ${JSON.stringify(error)}`)
        });
        req.on('close', (error) => {
            console.log('Last Transaction has occured')
        });
        req.setHeader('Content-Type', 'application/json');
        req.end();
    });

    var btn_input = document.getElementById('btn_input_apply');
    btn_input.addEventListener('click',function (){
        alert("btn apply");
    });

});

function input_time(){
    var temp = fireSensing_format;
    temp.content.columns[4].value = String(Date.now()) + "000";
    console.log(temp);
    return temp;
}

function create_request(){

    var get_method ='POST';
    var get_protocol = 'http:';
    var get_hostname = '121.160.17.87';
    var get_path ='/hrm/setFireSensing';
    var get_port = '13000';
    var get_redirect = 'follow';



    var result = net.request({
        method: get_method,
        protocol: get_protocol,
        hostname: get_hostname,
        path: get_path,
        port: get_port,
        redirect: get_redirect
    });

    return result;
}