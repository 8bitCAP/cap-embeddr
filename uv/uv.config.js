self.__uv$config = {
    prefix: '/static/petezah/',
    
    // BARE SERVER https://bare.petezahgames.com/  https://petezahserver.faizinternational.com.np/bare/ 
    // bare:'https://petezahgames.com/bare/',
    bare:'cap-bare.vercel.app/bare/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
