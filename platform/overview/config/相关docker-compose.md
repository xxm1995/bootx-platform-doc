## MySQL

## Redis
```yaml
version: '3'
services:
  # 缓存
  redis:
    image: redis:6.2.4
    container_name: redis
    restart: always
    command: redis-server --requirepass password
    ports:
      - 26379:6379
    volumes:
      - /data:/data
```
## MongoDB
```yaml
version: '3'
services:
  mongodb:
    image: mongo
    container_name: mongo
    restart: always
    ports:
        - 27017:27017
    volumes:
        - "./data/configdb:/data/configdb"
        - "./data/db:/data/db"
    command: mongod --auth
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root       #初始化管理员用户名和密码
      - MONGO_INITDB_ROOT_PASSWORD=123456
```
## RabbitMQ
```yaml
version: '3'
services:
  rabbitmq:
    image: rabbitmq:management
    container_name: rabbitmq
    restart: always
    ports:
      - 15672:15672
      - 5672:5672
    volumes:
      - ./data:/var/lib/rabbitmq
    environment:
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=123123
```
## ELK
```yaml
version: '3'
services:
  es:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.13.2
    container_name: es
    environment:
      - node.name=es
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms2048m -Xmx4096m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data01:/usr/share/elasticsearch/data
      - /home/ubuntu/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins
    ports:
      - 9200:9200
    networks:
      - elastic

  kibana:
    image: kibana:7.13.2
    container_name: kibana
    environment:
      - ELASTICSEARCH_HOSTS=http://es:9200
      # 需要将Kibana配置文件中的小写转换成大写，然后这个才能用于变量，才能被设置到
      - I18N_LOCALE=zh-CN
      - xpack.monitoring.ui.container.elasticsearch.enabled=false
    ports:
      - "5601:5601"
    networks:
      - elastic

volumes:
  data01:
    driver: local

networks:
  elastic:
    driver: bridge
```
## MQTT


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
