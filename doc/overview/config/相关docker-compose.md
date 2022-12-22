## TdEngine
```yaml
version: '3'
services:
  TDengine: 
    image: tdengine/tdengine
    container_name: tdengine
    hostname: tdengine
    ports:
      - 6030:6030
      - 6035:6035
      - 6041:6041
      - 6030-6040:6030-6040/udp
    volumes:
      - /data/volume/tdengine/lib:/var/lib/taos:Z
      - /data/volume/tdengine/log:/var/log/taos:Z
    restart: always
    tty: true
```
