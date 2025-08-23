self.__uv$config = {
    prefix: '/embed/',
    
    // BARE SERVER https://bare.petezahgames.com/  https://petezahserver.faizinternational.com.np/bare/
    bare:'http://petezahgames.com/bare/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
