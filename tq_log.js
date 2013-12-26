{ identity: 'game',
  adapter: 
   { syncable: true,
     migrate: 'alter',
     defaults: { schema: false, adapter: 'sails-disk' },
     filePath: '.tmp/disk.db',
     registerCollection: [Function],
     describe: [Function],
     define: [Function],
     drop: [Function],
     find: [Function],
     create: [Function],
     update: [Function],
     destroy: [Function],
     config: { schema: false, adapter: 'sails-disk' } },
  attributes: 
   { username: { type: 'string' },
     posX: { type: 'float' },
     posY: { type: 'float' },
     posZ: { type: 'float' },
     colorR: { type: 'integer' },
     colorG: { type: 'integer' },
     colorB: { type: 'integer' },
     Chat: { type: 'string' } },
  _cast: 
   { _types: 
      { username: 'string',
        posX: 'float',
        posY: 'float',
        posZ: 'float',
        colorR: 'integer',
        colorG: 'integer',
        colorB: 'integer',
        Chat: 'string',
        id: 'integer',
        createdAt: 'datetime',
        updatedAt: 'datetime' } },
  _schema: 
   { context: [Circular],
     schema: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object],
        id: [Object],
        createdAt: [Object],
        updatedAt: [Object] },
     hasSchema: false },
  _validator: 
   { validations: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object] } },
  _callbacks: 
   { beforeValidation: [ [Function] ],
     afterValidation: [ [Function] ],
     beforeUpdate: [ [Function] ],
     afterUpdate: [ [Function] ],
     beforeCreate: [ [Function] ],
     afterCreate: [ [Function] ],
     beforeDestroy: [ [Function] ],
     afterDestroy: [ [Function] ] },
  _instanceMethods: {},
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  hasSchema: false,
  migrate: 'alter',
  _model: { [Function] extend: [Function], inject: [Function]
, __super__: {} },
  _transformer: { _transformations: {} },
  _tableName: 'game',
  _adapterDefs: 
   [ { syncable: true,
       migrate: 'alter',
       defaults: [Object],
       filePath: '.tmp/disk.db',
       registerCollection: [Function],
       describe: [Function],
       define: [Function],
       drop: [Function],
       find: [Function],
       create: [Function],
       update: [Function],
       destroy: [Function],
       config: [Object] } ],
  _adapter: 
   { adapter: 
      { syncable: true,
        migrate: 'alter',
        defaults: [Object],
        filePath: '.tmp/disk.db',
        registerCollection: [Function],
        describe: [Function],
        define: [Function],
        drop: [Function],
        find: [Function],
        create: [Function],
        update: [Function],
        destroy: [Function],
        config: [Object] },
     adapterDefs: [ [Object] ],
     query: [Circular],
     collection: 'game' },
  syncable: [Function],
  defaults: [Function],
  filePath: [Function],
  registerCollection: [Function],
  define: [Function],
  config: [Function],
  findOneByUsername: [Function: dynamicMethod],
  findOneByUsernameIn: [Function: dynamicMethod],
  findOneByUsernameLike: [Function: dynamicMethod],
  findByUsername: [Function: dynamicMethod],
  findByUsernameIn: [Function: dynamicMethod],
  findByUsernameLike: [Function: dynamicMethod],
  countByUsername: [Function: dynamicMethod],
  countByUsernameIn: [Function: dynamicMethod],
  countByUsernameLike: [Function: dynamicMethod],
  usernameStartsWith: [Function: dynamicMethod],
  usernameContains: [Function: dynamicMethod],
  usernameEndsWith: [Function: dynamicMethod],
  findOneByPosX: [Function: dynamicMethod],
  findOneByPosXIn: [Function: dynamicMethod],
  findOneByPosXLike: [Function: dynamicMethod],
  findByPosX: [Function: dynamicMethod],
  findByPosXIn: [Function: dynamicMethod],
  findByPosXLike: [Function: dynamicMethod],
  countByPosX: [Function: dynamicMethod],
  countByPosXIn: [Function: dynamicMethod],
  countByPosXLike: [Function: dynamicMethod],
  posXStartsWith: [Function: dynamicMethod],
  posXContains: [Function: dynamicMethod],
  posXEndsWith: [Function: dynamicMethod],
  findOneByPosY: [Function: dynamicMethod],
  findOneByPosYIn: [Function: dynamicMethod],
  findOneByPosYLike: [Function: dynamicMethod],
  findByPosY: [Function: dynamicMethod],
  findByPosYIn: [Function: dynamicMethod],
  findByPosYLike: [Function: dynamicMethod],
  countByPosY: [Function: dynamicMethod],
  countByPosYIn: [Function: dynamicMethod],
  countByPosYLike: [Function: dynamicMethod],
  posYStartsWith: [Function: dynamicMethod],
  posYContains: [Function: dynamicMethod],
  posYEndsWith: [Function: dynamicMethod],
  findOneByPosZ: [Function: dynamicMethod],
  findOneByPosZIn: [Function: dynamicMethod],
  findOneByPosZLike: [Function: dynamicMethod],
  findByPosZ: [Function: dynamicMethod],
  findByPosZIn: [Function: dynamicMethod],
  findByPosZLike: [Function: dynamicMethod],
  countByPosZ: [Function: dynamicMethod],
  countByPosZIn: [Function: dynamicMethod],
  countByPosZLike: [Function: dynamicMethod],
  posZStartsWith: [Function: dynamicMethod],
  posZContains: [Function: dynamicMethod],
  posZEndsWith: [Function: dynamicMethod],
  findOneByColorR: [Function: dynamicMethod],
  findOneByColorRIn: [Function: dynamicMethod],
  findOneByColorRLike: [Function: dynamicMethod],
  findByColorR: [Function: dynamicMethod],
  findByColorRIn: [Function: dynamicMethod],
  findByColorRLike: [Function: dynamicMethod],
  countByColorR: [Function: dynamicMethod],
  countByColorRIn: [Function: dynamicMethod],
  countByColorRLike: [Function: dynamicMethod],
  colorRStartsWith: [Function: dynamicMethod],
  colorRContains: [Function: dynamicMethod],
  colorREndsWith: [Function: dynamicMethod],
  findOneByColorG: [Function: dynamicMethod],
  findOneByColorGIn: [Function: dynamicMethod],
  findOneByColorGLike: [Function: dynamicMethod],
  findByColorG: [Function: dynamicMethod],
  findByColorGIn: [Function: dynamicMethod],
  findByColorGLike: [Function: dynamicMethod],
  countByColorG: [Function: dynamicMethod],
  countByColorGIn: [Function: dynamicMethod],
  countByColorGLike: [Function: dynamicMethod],
  colorGStartsWith: [Function: dynamicMethod],
  colorGContains: [Function: dynamicMethod],
  colorGEndsWith: [Function: dynamicMethod],
  findOneByColorB: [Function: dynamicMethod],
  findOneByColorBIn: [Function: dynamicMethod],
  findOneByColorBLike: [Function: dynamicMethod],
  findByColorB: [Function: dynamicMethod],
  findByColorBIn: [Function: dynamicMethod],
  findByColorBLike: [Function: dynamicMethod],
  countByColorB: [Function: dynamicMethod],
  countByColorBIn: [Function: dynamicMethod],
  countByColorBLike: [Function: dynamicMethod],
  colorBStartsWith: [Function: dynamicMethod],
  colorBContains: [Function: dynamicMethod],
  colorBEndsWith: [Function: dynamicMethod],
  findOneByChat: [Function: dynamicMethod],
  findOneByChatIn: [Function: dynamicMethod],
  findOneByChatLike: [Function: dynamicMethod],
  findByChat: [Function: dynamicMethod],
  findByChatIn: [Function: dynamicMethod],
  findByChatLike: [Function: dynamicMethod],
  countByChat: [Function: dynamicMethod],
  countByChatIn: [Function: dynamicMethod],
  countByChatLike: [Function: dynamicMethod],
  ChatStartsWith: [Function: dynamicMethod],
  ChatContains: [Function: dynamicMethod],
  ChatEndsWith: [Function: dynamicMethod],
  findOneById: [Function: dynamicMethod],
  findOneByIdIn: [Function: dynamicMethod],
  findOneByIdLike: [Function: dynamicMethod],
  findById: [Function: dynamicMethod],
  findByIdIn: [Function: dynamicMethod],
  findByIdLike: [Function: dynamicMethod],
  countById: [Function: dynamicMethod],
  countByIdIn: [Function: dynamicMethod],
  countByIdLike: [Function: dynamicMethod],
  idStartsWith: [Function: dynamicMethod],
  idContains: [Function: dynamicMethod],
  idEndsWith: [Function: dynamicMethod],
  findOneByCreatedAt: [Function: dynamicMethod],
  findOneByCreatedAtIn: [Function: dynamicMethod],
  findOneByCreatedAtLike: [Function: dynamicMethod],
  findByCreatedAt: [Function: dynamicMethod],
  findByCreatedAtIn: [Function: dynamicMethod],
  findByCreatedAtLike: [Function: dynamicMethod],
  countByCreatedAt: [Function: dynamicMethod],
  countByCreatedAtIn: [Function: dynamicMethod],
  countByCreatedAtLike: [Function: dynamicMethod],
  createdAtStartsWith: [Function: dynamicMethod],
  createdAtContains: [Function: dynamicMethod],
  createdAtEndsWith: [Function: dynamicMethod],
  findOneByUpdatedAt: [Function: dynamicMethod],
  findOneByUpdatedAtIn: [Function: dynamicMethod],
  findOneByUpdatedAtLike: [Function: dynamicMethod],
  findByUpdatedAt: [Function: dynamicMethod],
  findByUpdatedAtIn: [Function: dynamicMethod],
  findByUpdatedAtLike: [Function: dynamicMethod],
  countByUpdatedAt: [Function: dynamicMethod],
  countByUpdatedAtIn: [Function: dynamicMethod],
  countByUpdatedAtLike: [Function: dynamicMethod],
  updatedAtStartsWith: [Function: dynamicMethod],
  updatedAtContains: [Function: dynamicMethod],
  updatedAtEndsWith: [Function: dynamicMethod] }
info: handshake authorized 17TksQq95tZSYba-YBik
param 1234
GameFind 1234
{ identity: 'game',
  adapter: 
   { syncable: true,
     migrate: 'alter',
     defaults: { schema: false, adapter: 'sails-disk' },
     filePath: '.tmp/disk.db',
     registerCollection: [Function],
     describe: [Function],
     define: [Function],
     drop: [Function],
     find: [Function],
     create: [Function],
     update: [Function],
     destroy: [Function],
     config: { schema: false, adapter: 'sails-disk' } },
  attributes: 
   { username: { type: 'string' },
     posX: { type: 'float' },
     posY: { type: 'float' },
     posZ: { type: 'float' },
     colorR: { type: 'integer' },
     colorG: { type: 'integer' },
     colorB: { type: 'integer' },
     Chat: { type: 'string' } },
  _cast: 
   { _types: 
      { username: 'string',
        posX: 'float',
        posY: 'float',
        posZ: 'float',
        colorR: 'integer',
        colorG: 'integer',
        colorB: 'integer',
        Chat: 'string',
        id: 'integer',
        createdAt: 'datetime',
        updatedAt: 'datetime' } },
  _schema: 
   { context: [Circular],
     schema: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object],
        id: [Object],
        createdAt: [Object],
        updatedAt: [Object] },
     hasSchema: false },
  _validator: 
   { validations: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object] } },
  _callbacks: 
   { beforeValidation: [ [Function] ],
     afterValidation: [ [Function] ],
     beforeUpdate: [ [Function] ],
     afterUpdate: [ [Function] ],
     beforeCreate: [ [Function] ],
     afterCreate: [ [Function] ],
     beforeDestroy: [ [Function] ],
     afterDestroy: [ [Function] ] },
  _instanceMethods: {},
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  hasSchema: false,
  migrate: 'alter',
  _model: { [Function] extend: [Function], inject: [Function]
, __super__: {} },
  _transformer: { _transformations: {} },
  _tableName: 'game',
  _adapterDefs: 
   [ { syncable: true,
       migrate: 'alter',
       defaults: [Object],
       filePath: '.tmp/disk.db',
       registerCollection: [Function],
       describe: [Function],
       define: [Function],
       drop: [Function],
       find: [Function],
       create: [Function],
       update: [Function],
       destroy: [Function],
       config: [Object] } ],
  _adapter: 
   { adapter: 
      { syncable: true,
        migrate: 'alter',
        defaults: [Object],
        filePath: '.tmp/disk.db',
        registerCollection: [Function],
        describe: [Function],
        define: [Function],
        drop: [Function],
        find: [Function],
        create: [Function],
        update: [Function],
        destroy: [Function],
        config: [Object] },
     adapterDefs: [ [Object] ],
     query: [Circular],
     collection: 'game' },
  syncable: [Function],
  defaults: [Function],
  filePath: [Function],
  registerCollection: [Function],
  define: [Function],
  config: [Function],
  findOneByUsername: [Function: dynamicMethod],
  findOneByUsernameIn: [Function: dynamicMethod],
  findOneByUsernameLike: [Function: dynamicMethod],
  findByUsername: [Function: dynamicMethod],
  findByUsernameIn: [Function: dynamicMethod],
  findByUsernameLike: [Function: dynamicMethod],
  countByUsername: [Function: dynamicMethod],
  countByUsernameIn: [Function: dynamicMethod],
  countByUsernameLike: [Function: dynamicMethod],
  usernameStartsWith: [Function: dynamicMethod],
  usernameContains: [Function: dynamicMethod],
  usernameEndsWith: [Function: dynamicMethod],
  findOneByPosX: [Function: dynamicMethod],
  findOneByPosXIn: [Function: dynamicMethod],
  findOneByPosXLike: [Function: dynamicMethod],
  findByPosX: [Function: dynamicMethod],
  findByPosXIn: [Function: dynamicMethod],
  findByPosXLike: [Function: dynamicMethod],
  countByPosX: [Function: dynamicMethod],
  countByPosXIn: [Function: dynamicMethod],
  countByPosXLike: [Function: dynamicMethod],
  posXStartsWith: [Function: dynamicMethod],
  posXContains: [Function: dynamicMethod],
  posXEndsWith: [Function: dynamicMethod],
  findOneByPosY: [Function: dynamicMethod],
  findOneByPosYIn: [Function: dynamicMethod],
  findOneByPosYLike: [Function: dynamicMethod],
  findByPosY: [Function: dynamicMethod],
  findByPosYIn: [Function: dynamicMethod],
  findByPosYLike: [Function: dynamicMethod],
  countByPosY: [Function: dynamicMethod],
  countByPosYIn: [Function: dynamicMethod],
  countByPosYLike: [Function: dynamicMethod],
  posYStartsWith: [Function: dynamicMethod],
  posYContains: [Function: dynamicMethod],
  posYEndsWith: [Function: dynamicMethod],
  findOneByPosZ: [Function: dynamicMethod],
  findOneByPosZIn: [Function: dynamicMethod],
  findOneByPosZLike: [Function: dynamicMethod],
  findByPosZ: [Function: dynamicMethod],
  findByPosZIn: [Function: dynamicMethod],
  findByPosZLike: [Function: dynamicMethod],
  countByPosZ: [Function: dynamicMethod],
  countByPosZIn: [Function: dynamicMethod],
  countByPosZLike: [Function: dynamicMethod],
  posZStartsWith: [Function: dynamicMethod],
  posZContains: [Function: dynamicMethod],
  posZEndsWith: [Function: dynamicMethod],
  findOneByColorR: [Function: dynamicMethod],
  findOneByColorRIn: [Function: dynamicMethod],
  findOneByColorRLike: [Function: dynamicMethod],
  findByColorR: [Function: dynamicMethod],
  findByColorRIn: [Function: dynamicMethod],
  findByColorRLike: [Function: dynamicMethod],
  countByColorR: [Function: dynamicMethod],
  countByColorRIn: [Function: dynamicMethod],
  countByColorRLike: [Function: dynamicMethod],
  colorRStartsWith: [Function: dynamicMethod],
  colorRContains: [Function: dynamicMethod],
  colorREndsWith: [Function: dynamicMethod],
  findOneByColorG: [Function: dynamicMethod],
  findOneByColorGIn: [Function: dynamicMethod],
  findOneByColorGLike: [Function: dynamicMethod],
  findByColorG: [Function: dynamicMethod],
  findByColorGIn: [Function: dynamicMethod],
  findByColorGLike: [Function: dynamicMethod],
  countByColorG: [Function: dynamicMethod],
  countByColorGIn: [Function: dynamicMethod],
  countByColorGLike: [Function: dynamicMethod],
  colorGStartsWith: [Function: dynamicMethod],
  colorGContains: [Function: dynamicMethod],
  colorGEndsWith: [Function: dynamicMethod],
  findOneByColorB: [Function: dynamicMethod],
  findOneByColorBIn: [Function: dynamicMethod],
  findOneByColorBLike: [Function: dynamicMethod],
  findByColorB: [Function: dynamicMethod],
  findByColorBIn: [Function: dynamicMethod],
  findByColorBLike: [Function: dynamicMethod],
  countByColorB: [Function: dynamicMethod],
  countByColorBIn: [Function: dynamicMethod],
  countByColorBLike: [Function: dynamicMethod],
  colorBStartsWith: [Function: dynamicMethod],
  colorBContains: [Function: dynamicMethod],
  colorBEndsWith: [Function: dynamicMethod],
  findOneByChat: [Function: dynamicMethod],
  findOneByChatIn: [Function: dynamicMethod],
  findOneByChatLike: [Function: dynamicMethod],
  findByChat: [Function: dynamicMethod],
  findByChatIn: [Function: dynamicMethod],
  findByChatLike: [Function: dynamicMethod],
  countByChat: [Function: dynamicMethod],
  countByChatIn: [Function: dynamicMethod],
  countByChatLike: [Function: dynamicMethod],
  ChatStartsWith: [Function: dynamicMethod],
  ChatContains: [Function: dynamicMethod],
  ChatEndsWith: [Function: dynamicMethod],
  findOneById: [Function: dynamicMethod],
  findOneByIdIn: [Function: dynamicMethod],
  findOneByIdLike: [Function: dynamicMethod],
  findById: [Function: dynamicMethod],
  findByIdIn: [Function: dynamicMethod],
  findByIdLike: [Function: dynamicMethod],
  countById: [Function: dynamicMethod],
  countByIdIn: [Function: dynamicMethod],
  countByIdLike: [Function: dynamicMethod],
  idStartsWith: [Function: dynamicMethod],
  idContains: [Function: dynamicMethod],
  idEndsWith: [Function: dynamicMethod],
  findOneByCreatedAt: [Function: dynamicMethod],
  findOneByCreatedAtIn: [Function: dynamicMethod],
  findOneByCreatedAtLike: [Function: dynamicMethod],
  findByCreatedAt: [Function: dynamicMethod],
  findByCreatedAtIn: [Function: dynamicMethod],
  findByCreatedAtLike: [Function: dynamicMethod],
  countByCreatedAt: [Function: dynamicMethod],
  countByCreatedAtIn: [Function: dynamicMethod],
  countByCreatedAtLike: [Function: dynamicMethod],
  createdAtStartsWith: [Function: dynamicMethod],
  createdAtContains: [Function: dynamicMethod],
  createdAtEndsWith: [Function: dynamicMethod],
  findOneByUpdatedAt: [Function: dynamicMethod],
  findOneByUpdatedAtIn: [Function: dynamicMethod],
  findOneByUpdatedAtLike: [Function: dynamicMethod],
  findByUpdatedAt: [Function: dynamicMethod],
  findByUpdatedAtIn: [Function: dynamicMethod],
  findByUpdatedAtLike: [Function: dynamicMethod],
  countByUpdatedAt: [Function: dynamicMethod],
  countByUpdatedAtIn: [Function: dynamicMethod],
  countByUpdatedAtLike: [Function: dynamicMethod],
  updatedAtStartsWith: [Function: dynamicMethod],
  updatedAtContains: [Function: dynamicMethod],
  updatedAtEndsWith: [Function: dynamicMethod] }
info: handshake authorized k47nW9ha3bhmA1RRYBil
GameFind 1234
{ identity: 'game',
  adapter: 
   { syncable: true,
     migrate: 'alter',
     defaults: { schema: false, adapter: 'sails-disk' },
     filePath: '.tmp/disk.db',
     registerCollection: [Function],
     describe: [Function],
     define: [Function],
     drop: [Function],
     find: [Function],
     create: [Function],
     update: [Function],
     destroy: [Function],
     config: { schema: false, adapter: 'sails-disk' } },
  attributes: 
   { username: { type: 'string' },
     posX: { type: 'float' },
     posY: { type: 'float' },
     posZ: { type: 'float' },
     colorR: { type: 'integer' },
     colorG: { type: 'integer' },
     colorB: { type: 'integer' },
     Chat: { type: 'string' } },
  _cast: 
   { _types: 
      { username: 'string',
        posX: 'float',
        posY: 'float',
        posZ: 'float',
        colorR: 'integer',
        colorG: 'integer',
        colorB: 'integer',
        Chat: 'string',
        id: 'integer',
        createdAt: 'datetime',
        updatedAt: 'datetime' } },
  _schema: 
   { context: [Circular],
     schema: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object],
        id: [Object],
        createdAt: [Object],
        updatedAt: [Object] },
     hasSchema: false },
  _validator: 
   { validations: 
      { username: [Object],
        posX: [Object],
        posY: [Object],
        posZ: [Object],
        colorR: [Object],
        colorG: [Object],
        colorB: [Object],
        Chat: [Object] } },
  _callbacks: 
   { beforeValidation: [ [Function] ],
     afterValidation: [ [Function] ],
     beforeUpdate: [ [Function] ],
     afterUpdate: [ [Function] ],
     beforeCreate: [ [Function] ],
     afterCreate: [ [Function] ],
     beforeDestroy: [ [Function] ],
     afterDestroy: [ [Function] ] },
  _instanceMethods: {},
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  hasSchema: false,
  migrate: 'alter',
  _model: { [Function] extend: [Function], inject: [Function]
, __super__: {} },
  _transformer: { _transformations: {} },
  _tableName: 'game',
  _adapterDefs: 
   [ { syncable: true,
       migrate: 'alter',
       defaults: [Object],
       filePath: '.tmp/disk.db',
       registerCollection: [Function],
       describe: [Function],
       define: [Function],
       drop: [Function],
       find: [Function],
       create: [Function],
       update: [Function],
       destroy: [Function],
       config: [Object] } ],
  _adapter: 
   { adapter: 
      { syncable: true,
        migrate: 'alter',
        defaults: [Object],
        filePath: '.tmp/disk.db',
        registerCollection: [Function],
        describe: [Function],
        define: [Function],
        drop: [Function],
        find: [Function],
        create: [Function],
        update: [Function],
        destroy: [Function],
        config: [Object] },
     adapterDefs: [ [Object] ],
     query: [Circular],
     collection: 'game' },
  syncable: [Function],
  defaults: [Function],
  filePath: [Function],
  registerCollection: [Function],
  define: [Function],
  config: [Function],
  findOneByUsername: [Function: dynamicMethod],
  findOneByUsernameIn: [Function: dynamicMethod],
  findOneByUsernameLike: [Function: dynamicMethod],
  findByUsername: [Function: dynamicMethod],
  findByUsernameIn: [Function: dynamicMethod],
  findByUsernameLike: [Function: dynamicMethod],
  countByUsername: [Function: dynamicMethod],
  countByUsernameIn: [Function: dynamicMethod],
  countByUsernameLike: [Function: dynamicMethod],
  usernameStartsWith: [Function: dynamicMethod],
  usernameContains: [Function: dynamicMethod],
  usernameEndsWith: [Function: dynamicMethod],
  findOneByPosX: [Function: dynamicMethod],
  findOneByPosXIn: [Function: dynamicMethod],
  findOneByPosXLike: [Function: dynamicMethod],
  findByPosX: [Function: dynamicMethod],
  findByPosXIn: [Function: dynamicMethod],
  findByPosXLike: [Function: dynamicMethod],
  countByPosX: [Function: dynamicMethod],
  countByPosXIn: [Function: dynamicMethod],
  countByPosXLike: [Function: dynamicMethod],
  posXStartsWith: [Function: dynamicMethod],
  posXContains: [Function: dynamicMethod],
  posXEndsWith: [Function: dynamicMethod],
  findOneByPosY: [Function: dynamicMethod],
  findOneByPosYIn: [Function: dynamicMethod],
  findOneByPosYLike: [Function: dynamicMethod],
  findByPosY: [Function: dynamicMethod],
  findByPosYIn: [Function: dynamicMethod],
  findByPosYLike: [Function: dynamicMethod],
  countByPosY: [Function: dynamicMethod],
  countByPosYIn: [Function: dynamicMethod],
  countByPosYLike: [Function: dynamicMethod],
  posYStartsWith: [Function: dynamicMethod],
  posYContains: [Function: dynamicMethod],
  posYEndsWith: [Function: dynamicMethod],
  findOneByPosZ: [Function: dynamicMethod],
  findOneByPosZIn: [Function: dynamicMethod],
  findOneByPosZLike: [Function: dynamicMethod],
  findByPosZ: [Function: dynamicMethod],
  findByPosZIn: [Function: dynamicMethod],
  findByPosZLike: [Function: dynamicMethod],
  countByPosZ: [Function: dynamicMethod],
  countByPosZIn: [Function: dynamicMethod],
  countByPosZLike: [Function: dynamicMethod],
  posZStartsWith: [Function: dynamicMethod],
  posZContains: [Function: dynamicMethod],
  posZEndsWith: [Function: dynamicMethod],
  findOneByColorR: [Function: dynamicMethod],
  findOneByColorRIn: [Function: dynamicMethod],
  findOneByColorRLike: [Function: dynamicMethod],
  findByColorR: [Function: dynamicMethod],
  findByColorRIn: [Function: dynamicMethod],
  findByColorRLike: [Function: dynamicMethod],
  countByColorR: [Function: dynamicMethod],
  countByColorRIn: [Function: dynamicMethod],
  countByColorRLike: [Function: dynamicMethod],
  colorRStartsWith: [Function: dynamicMethod],
  colorRContains: [Function: dynamicMethod],
  colorREndsWith: [Function: dynamicMethod],
  findOneByColorG: [Function: dynamicMethod],
  findOneByColorGIn: [Function: dynamicMethod],
  findOneByColorGLike: [Function: dynamicMethod],
  findByColorG: [Function: dynamicMethod],
  findByColorGIn: [Function: dynamicMethod],
  findByColorGLike: [Function: dynamicMethod],
  countByColorG: [Function: dynamicMethod],
  countByColorGIn: [Function: dynamicMethod],
  countByColorGLike: [Function: dynamicMethod],
  colorGStartsWith: [Function: dynamicMethod],
  colorGContains: [Function: dynamicMethod],
  colorGEndsWith: [Function: dynamicMethod],
  findOneByColorB: [Function: dynamicMethod],
  findOneByColorBIn: [Function: dynamicMethod],
  findOneByColorBLike: [Function: dynamicMethod],
  findByColorB: [Function: dynamicMethod],
  findByColorBIn: [Function: dynamicMethod],
  findByColorBLike: [Function: dynamicMethod],
  countByColorB: [Function: dynamicMethod],
  countByColorBIn: [Function: dynamicMethod],
  countByColorBLike: [Function: dynamicMethod],
  colorBStartsWith: [Function: dynamicMethod],
  colorBContains: [Function: dynamicMethod],
  colorBEndsWith: [Function: dynamicMethod],
  findOneByChat: [Function: dynamicMethod],
  findOneByChatIn: [Function: dynamicMethod],
  findOneByChatLike: [Function: dynamicMethod],
  findByChat: [Function: dynamicMethod],
  findByChatIn: [Function: dynamicMethod],
  findByChatLike: [Function: dynamicMethod],
  countByChat: [Function: dynamicMethod],
  countByChatIn: [Function: dynamicMethod],
  countByChatLike: [Function: dynamicMethod],
  ChatStartsWith: [Function: dynamicMethod],
  ChatContains: [Function: dynamicMethod],
  ChatEndsWith: [Function: dynamicMethod],
  findOneById: [Function: dynamicMethod],
  findOneByIdIn: [Function: dynamicMethod],
  findOneByIdLike: [Function: dynamicMethod],
  findById: [Function: dynamicMethod],
  findByIdIn: [Function: dynamicMethod],
  findByIdLike: [Function: dynamicMethod],
  countById: [Function: dynamicMethod],
  countByIdIn: [Function: dynamicMethod],
  countByIdLike: [Function: dynamicMethod],
  idStartsWith: [Function: dynamicMethod],
  idContains: [Function: dynamicMethod],
  idEndsWith: [Function: dynamicMethod],
  findOneByCreatedAt: [Function: dynamicMethod],
  findOneByCreatedAtIn: [Function: dynamicMethod],
  findOneByCreatedAtLike: [Function: dynamicMethod],
  findByCreatedAt: [Function: dynamicMethod],
  findByCreatedAtIn: [Function: dynamicMethod],
  findByCreatedAtLike: [Function: dynamicMethod],
  countByCreatedAt: [Function: dynamicMethod],
  countByCreatedAtIn: [Function: dynamicMethod],
  countByCreatedAtLike: [Function: dynamicMethod],
  createdAtStartsWith: [Function: dynamicMethod],
  createdAtContains: [Function: dynamicMethod],
  createdAtEndsWith: [Function: dynamicMethod],
  findOneByUpdatedAt: [Function: dynamicMethod],
  findOneByUpdatedAtIn: [Function: dynamicMethod],
  findOneByUpdatedAtLike: [Function: dynamicMethod],
  findByUpdatedAt: [Function: dynamicMethod],
  findByUpdatedAtIn: [Function: dynamicMethod],
  findByUpdatedAtLike: [Function: dynamicMethod],
  countByUpdatedAt: [Function: dynamicMethod],
  countByUpdatedAtIn: [Function: dynamicMethod],
  countByUpdatedAtLike: [Function: dynamicMethod],
  updatedAtStartsWith: [Function: dynamicMethod],
  updatedAtContains: [Function: dynamicMethod],
  updatedAtEndsWith: [Function: dynamicMethod] }