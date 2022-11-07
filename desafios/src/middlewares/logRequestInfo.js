//  https://www.moesif.com/blog/technical/logging/How-we-built-a-Nodejs-Middleware-to-Log-HTTP-API-Requests-and-Responses/

const timeElapsed = Date.now();
const today = new Date(timeElapsed).toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"});

const logRequestInfo = (req, res, next) => {
    const { rawHeaders, httpVersion, method, socket, url } = req;
    const { remoteAddress, remoteFamily } = socket;
    const { statusCode, statusMessage } = res;
    const headers = res.getHeaders();
  
    console.log(
      JSON.stringify({
        timestamp: today,
        processingTime: Date.now() - timeElapsed,
        // rawHeaders,
        // httpVersion,
        method,
        // remoteAddress,
        // remoteFamily,
        url,
        response: {
          statusCode,
          statusMessage,
          headers
        }
      })
    )
    // console.log(`METODO: ${req.method} ${req.path}`);
    next();
  }

  module.exports = logRequestInfo