var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

class js {
 
  getInfo() {
    return {
      id: '123456',
      name: 'Javascript',
      blocks: [    
{
          opcode: 'js',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Javascript [text]',
          arguments: {
            text: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'console.log("Hello World!");'
            }}
        }  
      ]
};}

js(args) {
    eval(args.text);
    return 0;
  };

}

Scratch.extensions.register(new js());

}
/*
     FILE ARCHIVED ON 00:25:27 Jul 06, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:06:55 Feb 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.419
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.081
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 90.894 (3)
  PetaboxLoader3.datanode: 58.755 (4)
  CDXLines.iter: 15.882 (3)
  PetaboxLoader3.resolve: 137.376 (2)
  load_resource: 109.907
*/
