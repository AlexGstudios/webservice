const AuthService = async (route, action, method, data) => {
    const _unAutherized = {
        Authed: false
    };

    const _method = (method) => {
        if(method){
            if(action === "login"){
                return{
                    method: method,
                    headers: {"Content-Type": "application/json",
                            username: data.username,
                            password: data.password
                    }
                }
            }
            if(action === "register"){
                return{
                    method: method,
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                }
            }
        }
        return undefined;
    }

    try {
        const res = await fetch(`/${route}/${action}`, _method(method));
        if(res !== null){
            if(res.status === 200){
                const contentType = res.headers.get("content-type");
                if(contentType.indexOf("application/json") !== -1){
                    const data = await res.json();
                    return data;
                }else{
                    const data = await res.text();
                    return data;
                }
            }
        }else{
            return _unAutherized;
        }
    } catch (error) {
        return {error};
    }
};
export default AuthService;