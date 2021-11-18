"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[252],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7317:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],s={slug:"redis-server",title:"Build an Elixir Redis API that's 100x faster than HTTP",description:"Build a redis server in Elixir",authors:["kyle-hanson"],tags:["redis","elixir","api","http"]},l=void 0,d={permalink:"/blog/redis-server",source:"@site/blog/2021-11-09-elixir-redis-server/index.md",title:"Build an Elixir Redis API that's 100x faster than HTTP",description:"Build a redis server in Elixir",date:"2021-11-09T00:00:00.000Z",formattedDate:"November 9, 2021",tags:[{label:"redis",permalink:"/blog/tags/redis"},{label:"elixir",permalink:"/blog/tags/elixir"},{label:"api",permalink:"/blog/tags/api"},{label:"http",permalink:"/blog/tags/http"}],readingTime:6.16,truncated:!0,authors:[{name:"Kyle Hanson",title:"CEO of Statetrace",url:"https://github.com/hansonkd",imageURL:"https://github.com/hansonkd.png",key:"kyle-hanson"}],prevItem:{title:"Stream Postgres Changes into Elasticsearch with Statetrace",permalink:"/blog/stream-postgres-elastic-search"},nextItem:{title:"Time for a Change - Announcing Statetrace",permalink:"/blog/time-for-a-change"}},c={authorsImageUrls:[void 0]},p=[{value:"Advantages",id:"advantages",children:[],level:2},{value:"Reading the TCP connection",id:"reading-the-tcp-connection",children:[],level:2},{value:"Complete example",id:"complete-example",children:[],level:2},{value:"Connecting from a client",id:"connecting-from-a-client",children:[],level:2},{value:"MsgPack",id:"msgpack",children:[],level:2},{value:"Benchmark",id:"benchmark",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Need a fast server and client? HTTP too slow? Try the Redis Protocol for lightning fast, low-overhead API calls. It's easy to implement and nearly every language has mature Redis clients that can connect."),(0,r.kt)("div",{style:{background:"url(/img/ipanema.jpg)",backgroundSize:"150px",width:"100%",height:"200px",marginTop:"30px",marginBottom:"30px"}}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This project was inspired by ",(0,r.kt)("a",{href:"https://github.com/hansonkd/Tino/"},"Tino"),", the Redis/MsgPack framework for Python.")),(0,r.kt)("p",null,"Building a server based on Redis Protocol from scratch can sound intimidating. But if you know what you are doing it can be relatively straight forward to implement. A huge shortcut involves using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/whatyouhide/redix"},"Redix")," to parse the binary stream in a fast and efficient manner."),(0,r.kt)("p",null,"In this article we will implement a Redis echo server and explain how to extend the server to handle your own custom commands. In the end, it results in a performance boost of over ",(0,r.kt)("strong",{parentName:"p"},"100x")," using Redis instead of HTTP."),(0,r.kt)("p",null,"This blog post assumes you are familar with Elixir and its Application structure. If you want to learn more about TCP connections and supervision, read the ",(0,r.kt)("a",{parentName:"p",href:"https://elixir-lang.org/getting-started/mix-otp/task-and-gen-tcp.html"},"official Elixir article"),"."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("p",null,"First before we get started, lets discuss some of the advantages. Building a server based on RESP (the Redis protocol) means you are cutting out a lot of overhead associated with HTTP. In addtion to a more lean protocol, nearly every language has a high-performance client built for Redis that allows pipelining. Pipelining combines commands as you send them for even greater efficiency. Most redis clients even support pooling for working at high concurrencies."),(0,r.kt)("p",null,"With these built in features, you don't have to do very much to talk to your server in an extremely high performance fashion. "),(0,r.kt)("h2",{id:"reading-the-tcp-connection"},"Reading the TCP connection"),(0,r.kt)("p",null,"To get started building our server, we will need to accept a TCP connection. We do this by looping over ",(0,r.kt)("inlineCode",{parentName:"p"},":gen_tcp.accept")," and spawning a task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule MyRedisServer.Redis do\n  require Logger\n  def accept(port) do\n    {:ok, socket} = :gen_tcp.listen(port, [:binary, active: false, reuseaddr: true])\n    Logger.info("Accepting connections on port #{port}")\n    loop_acceptor(socket)\n  end\n\n  defp loop_acceptor(socket) do\n    {:ok, client} = :gen_tcp.accept(socket)\n\n    {:ok, pid} =\n      Task.start(fn ->\n        serve(client, %{continuation: nil})\n      end)\n\n    :ok = :gen_tcp.controlling_process(client, pid)\n\n    loop_acceptor(socket)\n  end\nend\n')),(0,r.kt)("p",null,"Now we are ready to read packets from the connection. Elixir's Redis client Redix includes an parser for us to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule MyRedisServer.Redis do\n  ...\n\n  defp serve(socket, %{continuation: nil}) do\n    case :gen_tcp.recv(socket, 0) do\n      {:ok, data} ->  handle_parse(socket, Redix.Protocol.parse(data))\n      {:error, :closed} -> :ok\n    end\n  end\n\n  defp serve(socket, %{continuation: fun}) do\n    case :gen_tcp.recv(socket, 0) do\n      {:ok, data} ->  handle_parse(socket, fun.(data))\n      {:error, :closed} -> :ok\n    end\n  end\nemd\n")),(0,r.kt)("p",null,"Handling the parse result is straight forward. Either an entire message was processed and we can handle it, and respond, or a partial message was recieved and we need to wait for more data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule MyRedisServer.Redis do\n  ...\n\n  defp handle_parse(socket, {:continuation, fun}) do\n    serve(socket, %{continuation: fun})\n  end\n\n  defp handle_parse(socket, {:ok, req, left_over}) do\n    resp = handle(req)\n\n    :gen_tcp.send(socket, Redix.Protocol.pack(resp))\n\n    case left_over do\n      "" -> serve(socket, %{continuation: nil})\n      _ -> handle_parse(socket, Redix.Protocol.parse(left_over))\n    end\n  end\n\n  def handle(data) do\n    data\n  end\nend\n')),(0,r.kt)("h2",{id:"complete-example"},"Complete example"),(0,r.kt)("p",null,"Finally we are ready to put it all together. All the pieces come together to form a nice little echo server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule MyRedisServer.Redis do\n  require Logger\n\n  def accept(port) do\n    {:ok, socket} = :gen_tcp.listen(port, [:binary, active: false, reuseaddr: true])\n    Logger.info("Accepting connections on port #{port}")\n    loop_acceptor(socket)\n  end\n\n  defp loop_acceptor(socket) do\n    {:ok, client} = :gen_tcp.accept(socket)\n\n    {:ok, pid} =\n      Task.start(fn ->\n        serve(client, %{continuation: nil})\n      end)\n\n    :ok = :gen_tcp.controlling_process(client, pid)\n\n    loop_acceptor(socket)\n  end\n\n  defp serve(socket, %{continuation: nil}) do\n    case :gen_tcp.recv(socket, 0) do\n      {:ok, data} ->  handle_parse(socket, Redix.Protocol.parse(data))\n      {:error, :closed} -> :ok\n    end\n  end\n\n  defp serve(socket, %{continuation: fun}) do\n    case :gen_tcp.recv(socket, 0) do\n      {:ok, data} ->  handle_parse(socket, fun.(data))\n      {:error, :closed} -> :ok\n    end\n  end\n\n  defp handle_parse(socket, {:continuation, fun}) do\n    serve(socket, %{continuation: fun})\n  end\n\n  defp handle_parse(socket, {:ok, req, left_over}) do\n    resp = handle(req)\n\n    :gen_tcp.send(socket, Redix.Protocol.pack(resp))\n\n    case left_over do\n      "" -> serve(socket, %{continuation: nil})\n      _ -> handle_parse(socket, Redix.Protocol.parse(left_over))\n    end\n  end\n\n  def handle(data) do\n    data\n  end\nend\n\n')),(0,r.kt)("p",null,"Run this server in your Application's supervision tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"}," defmodule MyRedisServer.Application do\n  use Application\n\n  ...\n\n  def start(_type, _args) do\n    claims = get_license_claims!()\n\n    children = [\n      ...,\n      Supervisor.child_spec({Task, fn -> MyRedisServer.Redis.accept(3211) end},   restart: :permanent)\n    ]\n\n    ...\n\n    Supervisor.start_link(children, opts)\n  end\nend\n")),(0,r.kt)("h2",{id:"connecting-from-a-client"},"Connecting from a client"),(0,r.kt)("p",null,"Start your mix project and you should be able to connect to redis on 3211 and the command should echo what you send it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'> {:ok, conn} = Redix.start_link("redis://localhost:3211")\n> Redix.command(conn, ["COOL_COMMAND", "123"])\n{:ok, ["COOL_COMMAND", "123"]}\n')),(0,r.kt)("p",null,"Adding commands to your new redis server is easy with pattern matching:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule MyRedisServer.Redis do\n  ...\n\n  def handle(["PUT", key, val]) do\n    Cachex.put(:my_cachex, key, val)\n    ["OK"]\n  end\n\n  def handle(["GET", key]) do\n    [Cachex.get(:my_cachex, key)]\n  end\n\n  def handle(["ECHO", msg]) do\n    msg\n  end\n\n  def handle(_data) do\n    %Redix.Error{message: "UNKNOWN_COMMAND"}\n  end\nend\n')),(0,r.kt)("h2",{id:"msgpack"},"MsgPack"),(0,r.kt)("p",null,"MsgPack is essentially a faster, more compact version of JSON. Use it to serialize complex structures into binary data to pass back and forth between your API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule MyRedisServer.Redis do\n  ...\n\n  def handle([command, payload]) do\n    case handle_command(command, MsgPax.unpack!(payload)) do\n        {:error, e} -> %Redix.Error{message: "ERROR #{e}"}\n        value -> [MsgPax.pack!(value)]\n    end\n  end\n\n  def hande(_) do\n    %Redix.Error{message: "INMVALID_FORMAT"}\n  end\n\n  defp handle_command("PUT", [key, val]) do\n    Cachex.put(:my_cachex, key, val)\n    ["OK"]\n  end\n\n  defp handle_command("GET", key) do\n    Cachex.get(:my_cachex, key)\n  end\n\n  defp handle_command("ECHO", msg) do\n    msg\n  end\n\n  defp handle_command(_command, _data) do\n    {:error, "INVALID_COMMAND"}\n  end\nend\n')),(0,r.kt)("h2",{id:"benchmark"},"Benchmark"),(0,r.kt)("p",null,"For this benchmark we will compare HTTP Phoenix to our Redis Server."),(0,r.kt)("p",null,"Our HTTP Phoenix Controllers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'  # GET -> Text\n  def bench(conn, %{"payload" => payload, "times" => times}) when is_binary(times) do\n    text(conn, String.duplicate(payload, String.to_integer(times)))\n  end\n\n  # POST -> JSON\n  def bench(conn, %{"payload" => payload, "times" => times}) do\n    json(conn, %{"data" => String.duplicate(payload, times)})\n  end\n')),(0,r.kt)("p",null,"and our Redis server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'  def handle(["BENCH", payload, number]) do\n    [String.duplicate(payload, String.to_integer(number))]\n  end\n')),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sneako/finch"},"Finch"),' for the HTTP client, which labels itself as "performance focused".'),(0,r.kt)("p",null,"For the full benchmark see ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/hansonkd/cd34329fe4f346e680b39a17d9988af4"},"the source"),"."),(0,r.kt)("p",null,"We will remotely call our functions using the Finch HTTP pool, a single Redix connection, or a pool of Redix connections. We will also test pipelining vs calling each command individually for Redix. We will call our remote function 1000 times concurrently and ask it to duplicate the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"12345&?\\"678,\\n90"'),"  100 times and respond."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Name                           ips        average  deviation         median         99th %\nredix_pool                   70.44       14.20 ms    \xb136.07%       13.30 ms       50.60 ms\nrun_redix_pipeline           30.56       32.73 ms    \xb165.74%       47.26 ms       91.99 ms\nredix_pool_pipelined         21.55       46.40 ms     \xb13.87%       47.59 ms       48.12 ms\nredix                        13.84       72.28 ms     \xb19.91%       72.09 ms       80.31 ms\nfinch_get                     0.55     1814.88 ms     \xb12.44%     1814.88 ms     1846.24 ms\nfinch_post                    0.54     1859.71 ms     \xb10.70%     1859.71 ms     1868.97 ms\n")),(0,r.kt)("p",null,"The results show that running Redis protocol is well over 100x faster than relying on HTTP. By default Phoenix sends extra headers for the content type and other information. In addition there is extra overhead encoding and decoding the values for URL encoding and JSON."),(0,r.kt)("p",null,"Overall using Redis as a Protocol instead of HTTP results in orders of magnitude higher troughput."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We wrote a high-performance server based on the Redis Protocol in around 10 minutes. This server can handle thousands of connections easily and has minimal overhead. One downside is that load balancing becomes more of a challenge when doing multi-node deploys when using a protocol other than HTTP."),(0,r.kt)("p",null,"If you have a one or thousands of clients that need to communicate with a server in the fastest way possible, consider using Redis as your protocol of choice instead of HTTP."))}m.isMDXComponent=!0}}]);