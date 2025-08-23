self.__uv$config = {
    prefix: '/embed/',
    
    // BARE SERVER http://sunburst.sun.2of1.org/v/ https://bare.petezahgames.com/
    bare:'https://petezahserver.faizinternational.com.np/bare/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
