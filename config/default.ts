require('dotenv').config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
  port: 1337,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.glsqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw0xVxd6ouANYIzPCIM77
dwmqm0uLjHMo74CrP+qoMT4oeLvaZDqSmgYBCI2z0XlvBm78pshLXVbzAbSQeVmf
aIofxC/66Q455Fv4NJ/WhcQeWrBfYFYlYyEvBv/8z6WcA41Sqmf1P/4nDCOvMjw/
TDt0QRWNR8xHVAhpUihTn2Ey+mG0m0wgxL5fRDZYVG8vX6UM8U3ipJ75j2Cdqjpt
w3FcwEso2u3gkSYwaicljZO3AbWaggbGLa2zj/kVqxujCNScYpr4h+zGeAMQyG7t
wNnhoytNSVKF9/MocHiN4A9TQ7rKQFbCcarOjg5+xU14Vd6+cFpAIoOMaqJV5Iug
  nwIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDTFXF3qi4A1gj
M8Igzvt3CaqbS4uMcyjvgKs/6qgxPih4u9pkOpKaBgEIjbPReW8GbvymyEtdVvMB
tJB5WZ9oih/EL/rpDjnkW/g0n9aFxB5asF9gViVjIS8G//zPpZwDjVKqZ/U//icM
I68yPD9MO3RBFY1HzEdUCGlSKFOfYTL6YbSbTCDEvl9ENlhUby9fpQzxTeKknvmP
YJ2qOm3DcVzASyja7eCRJjBqJyWNk7cBtZqCBsYtrbOP+RWrG6MI1JximviH7MZ4
AxDIbu3A2eGjK01JUoX38yhweI3gD1NDuspAVsJxqs6ODn7FTXhV3r5wWkAig4xq
olXki6CfAgMBAAECggEAHvILC0nvQQ0im51ZbtptRRzugCH10ED1JRIl0IBtuzPG
tO7LOaOAVFCMPF87tX8A5SuT9Bd7vaQH6GbEl73oQOfWBb+2idQ7vyAFkc0b8GE1
kBgvXLP5w53f9kN8uyhaMsPja+YCGew7IrTKz3J1cy5eiuuP0ecgDEQy8BY8vd2h
dQPpEuYqxzKI0SkETMvcvcf/Z9GCq1yi+ZgDL01dhOYCCmTS4jXPxpGPPxhiIMmw
D9UyzQ7IitCrWpbLEOONrxVauvmYMsJ38aDmKht8QxWnwd4+csxNRVVnv1HsU+bY
bskBp0NJA8bzaC0DTr19OLvbtneqFMv4eZj9jGEIFQKBgQDubveIbA/ShdQtIxFn
2Sgicvv9cGDNDXVCKhjgVWqwYQu959NrE/h5oGfy5RI6qFsACI4s90TBHS+dTaFu
53H75niFJIeAqwGW79LT4Dnze9mer+VfqeY/ubAF6TejcmDddQE6UK1C4ZH7x1jc
pnOb3s+l/bYLFSVDGuxQJU22VQKBgQDRr832UwZGsXcuVAfG4r0PLTTCchNFUfT3
ATeyTdVtLzsVsiY8C2aBpEBroLnSjBWAvPJ1oklIlYwSp1BZvx+vecAlYnqusWEB
Z8yl/7isKFUnrziPF9eoSAhQGsSHoIWwjOFp9xvKgPlGwucZIn4CIMZJaUbS428L
CdXekNHnIwKBgC+tjt//w9Y0Hq578bITcXwaBBu0yhaW11jItDq/udrVPRTXc6ZY
0vn3QnIGrnN+UNwb2dpSA7SeEnRhHqPfsiJN/tGY8WOgTmwRPtZRYyU2IdkikTpk
7f7WMcWs0gxkBcyi5gD0OwFBvABd534P5tRHZLxrlGh47P+TNaf9HaIVAoGAKA4E
MwSjE0f9Mz1cCvLvGIITLP2rjrdcKv7xi77wgR3flIJmaVvoJeWhZK3cMUsPJHtz
eWMZyqK+kiWh5LLss5F3Uezg8JPzqtgQMLmLpl9B/QWssTDlwkCYTez/E8VnJFWV
Da/lgCZo98ptaNC8710hY46Xt9s4MAyd7RkO768CgYEAsFxuV2Mz8BgIeyHqL2zh
hsHnkIGIJVS6m4TeNdfxQ+Znsd2JDOXqLdaggOfPgYBF579AffQWj23oQ18uIvzN
KL2zJkn2wUJ4SpOUu/RnPVfR2peUuOy2rniEnCxDKMM2YR4jZg2nt8FRkFx4Ki0+
qUt2JIL2EqGBdRl3t2hV8I8=
-----END PRIVATE KEY-----`
}
