"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[277],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,m=u["".concat(d,".").concat(g)]||u[g]||p[g]||r;return t?o.createElement(m,s(s({ref:n},c),{},{components:t})):o.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8110:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return g}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],i={slug:"build-a-postgres-proxy",title:"Build a Postgres Proxy in Elixir using Pattern Matching",description:"Build a postgres proxy in Elixir",authors:["kyle-hanson"],tags:["postgres","elixir","proxy"]},d=void 0,l={permalink:"/blog/build-a-postgres-proxy",source:"@site/blog/2021-11-16-postgres-proxy/index.md",title:"Build a Postgres Proxy in Elixir using Pattern Matching",description:"Build a postgres proxy in Elixir",date:"2021-11-16T00:00:00.000Z",formattedDate:"November 16, 2021",tags:[{label:"postgres",permalink:"/blog/tags/postgres"},{label:"elixir",permalink:"/blog/tags/elixir"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:8.865,truncated:!0,authors:[{name:"Kyle Hanson",title:"CEO of Statetrace",url:"https://github.com/hansonkd",imageURL:"https://github.com/hansonkd.png",key:"kyle-hanson"}],nextItem:{title:"Stream Postgres Changes into Elasticsearch with Statetrace",permalink:"/blog/stream-postgres-elastic-search"}},c={authorsImageUrls:[void 0]},p=[{value:"Build the Server",id:"build-the-server",children:[{value:"Accepting the socket",id:"accepting-the-socket",children:[{value:"Serving upstream",id:"serving-upstream",children:[],level:4}],level:3},{value:"Serving downstream",id:"serving-downstream",children:[],level:3},{value:"Complete server",id:"complete-server",children:[],level:3},{value:"Connecting",id:"connecting",children:[],level:3}],level:2},{value:"Controlling Postgres Statements",id:"controlling-postgres-statements",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Want to learn how your Application talks to your Database? Build a proxy using Elixir with its powerful pattern matching and ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_tcp")," to take your database understanding to the next level. In this article we build a Postgres proxy in Elixir to show all you need is a little curiousity to master one of the most popular SQL protocols around."),(0,r.kt)("div",{style:{background:"url(/img/ipanema.jpg)",backgroundSize:"150px",width:"100%",height:"200px",marginTop:"30px",marginBottom:"30px"}}),(0,r.kt)("p",null,"Building a proxy can be a great way to understand a protocol. Everything you build doesn't need to be used in production in order for it to be valuable to your understanding of the tech. The better you understand the tech, the more powerful the tech becomes."),(0,r.kt)("p",null,"In this post, we will explore how to accept a socket and proxy it to another, while at the same time parsing the stream. At the end of the post we can use our proxy to control which queries get executed on our postgres server."),(0,r.kt)("h2",{id:"build-the-server"},"Build the Server"),(0,r.kt)("p",null,"To build this proxy, I used the postgres ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.3/protocol.html"},"reference documentation")," regarding the protocol."),(0,r.kt)("p",null,"This blog post assumes you are familar with Elixir and its Application structure. If you want to learn more about TCP connections and supervision, read the ",(0,r.kt)("a",{parentName:"p",href:"https://elixir-lang.org/getting-started/mix-otp/task-and-gen-tcp.html"},"official Elixir article"),"."),(0,r.kt)("h3",{id:"accepting-the-socket"},"Accepting the socket"),(0,r.kt)("p",null,"For this proxy we will open a TCP socket in active mode. In order to understand what active mode is, it's helpful to know what it isn't. When active is false, the VM will stop reading packets from the socket until you call  ",(0,r.kt)("inlineCode",{parentName:"p"},":gen_tcp.recv"),". When the socket is set to active mode, the VM instead reads data as fast as possible from the socket and uses the processes mailbox as the buffer."),(0,r.kt)("p",null,"Because we will be reading data as fast as possible from both upstream and downstream, we will need to split out our listener into two processes. One process will read upstream data, parse it into commands, and then forward those commands to the Postgres database. The other process will read the responses from the Postgres database and forward them directly back to the client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.PostgresProxy do\n  require Logger\n\n  def accept(port) do\n    {:ok, socket} =\n      :gen_tcp.listen(port, [:binary, active: true, reuseaddr: true, packet: 0, nodelay: true])\n\n    Logger.info(\"Accepting connections on port #{port}\")\n    loop_acceptor(socket)\n  end\n\n  defp loop_acceptor(socket) do\n    {:ok, client} = :gen_tcp.accept(socket)\n\n    {:ok, pid} =\n      Task.Supervisor.start_child(Statetrace.TaskSupervisor, fn ->\n        {:ok, outbound} =\n          :gen_tcp.connect('localhost', 5432, [:binary, active: true, packet: 0, nodelay: true])\n\n        {:ok, pid2} =\n          Task.Supervisor.start_child(Statetrace.TaskSupervisor, fn ->\n            serve_downstream(client, outbound)\n          end)\n\n        :ok = :gen_tcp.controlling_process(outbound, pid2)\n\n        serve_upstream(client, outbound, nil, true)\n      end)\n\n    :ok = :gen_tcp.controlling_process(client, pid)\n\n    loop_acceptor(socket)\n  end\n\nend\n\n")),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},":gen_tcp.connect")," to connect to the real postgres database and spin it off into a loop of its own to pipe responses back to the client."),(0,r.kt)("h4",{id:"serving-upstream"},"Serving upstream"),(0,r.kt)("p",null,"Now build the parser for the upstream connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.PostgresProxy do\n\n  ...\n\n  def serve_upstream(socket, outbound, nil, is_first) do\n    data = socket |> read_line()\n\n    handle_parse(socket, outbound, parse_msg(data, is_first))\n  end\n\n  def serve_upstream(socket, outbound, fun, _is_first) do\n    data = socket |> read_line()\n\n    r = fun.(data)\n\n    handle_parse(socket, outbound, r)\n  end\n\n  def read_line(socket) do\n    receive do\n      {:tcp, ^socket, data} -> data\n    end\n  end\nend\n")),(0,r.kt)("p",null,"To parse the message is very simple. It is a very simple length-prefixed binary format with a message tag byte. The very first message of a connection is the only exception and excludes the tag. There is a chance that the current data we have is not enough to satisfy the length of the message. In this case we will use a continuation so that the next data that comes in, we can check to see if it completes the message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.PostgresProxy do\n\n  ...\n\n  # On the first message don't extract the tag\n  defp parse_msg(bin, true) do\n    # Use pattern matching to extract the length\n    <<len::unsigned-integer-32, _other_rest::binary>> = bin\n\n    case bin do\n      # Pattern match to see if our binary is big enough\n      <<msg_body::binary-size(len), final_rest::binary>> ->\n        {:ok, {{:msgStartup, nil}, msg_body}, final_rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(len, {:msgStartup, nil}, bin, data)\n         end}\n    end\n  end\n\n  # Pattern match the binary to extract the tag.\n  defp parse_msg(<<c::size(8), rest::binary>>, false) do\n    tag = tag_to_msg_type(c)\n\n    # Use pattern matching to extract the length\n    <<len::unsigned-integer-32, _other_rest::binary>> = rest\n\n    case rest do\n      # Pattern match to see if our binary is big enough\n      <<msg_body::binary-size(len), final_rest::binary>> ->\n        {:ok, {{tag, c}, msg_body}, final_rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(len, {tag, c}, rest, data)\n         end}\n    end\n  end\n\n  def handle_continuation(l, tag, other, data) do\n    new_data = other <> data\n\n    case new_data do\n      <<msg_body::binary-size(l), rest::binary>> ->\n        {:ok, {tag, msg_body}, rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(l, tag, new_data, data)\n         end}\n    end\n  end\nend\n")),(0,r.kt)("p",null,"The first byte in non-connection messages is a tag. We will convert this tag into an atom."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.PostgresProxy do\n\n  ...\n\n  defp tag_to_msg_type(val) do\n    case val do\n      ?1 -> :msgParseComplete\n      ?2 -> :msgBindComplete\n      ?3 -> :msgCloseComplete\n      ?A -> :msgNotificationResponse\n      ?c -> :msgCopyDone\n      ?C -> :msgCommandComplete\n      ?d -> :msgCopyData\n      ?D -> :msgDataRow\n      ?E -> :msgErrorResponse\n      ?f -> :msgFail\n      ?G -> :msgCopyInResponse\n      ?H -> :msgCopyOutResponse\n      ?I -> :msgEmptyQueryResponse\n      ?K -> :msgBackendKeyData\n      ?n -> :msgNoData\n      ?N -> :msgNoticeResponse\n      ?R -> :msgAuthentication\n      ?s -> :msgPortalSuspended\n      ?S -> :msgParameterStatus\n      ?t -> :msgParameterDescription\n      ?T -> :msgRowDescription\n      ?p -> :msgPasswordMessage\n      ?W -> :CopyBothResponse\n      ?Q -> :msgQuery\n      ?X -> :msgTerminate\n      ?Z -> :msgReadyForQuery\n      ?P -> :msgParse\n      ?B -> :msgBind\n      _ -> :msgNoTag\n    end\n  end\nend\n")),(0,r.kt)("p",null,"Finally we will handle the parse result. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule Statetrace.PostgresProxy do\n\n  ...\n\n  def handle_parse(socket, outbound, {:continuation, continuation}) do\n    serve_upstream(socket, outbound, continuation, false)\n  end\n\n  def handle_parse(socket, outbound, {:ok, {{_msgType, c}, data}, left_over}) do\n    to_send =\n      case c do\n        nil -> data\n        _ -> [c, data]\n      end\n\n    :ok = :gen_tcp.send(outbound, to_send)\n\n    case left_over do\n      "" -> serve_upstream(socket, outbound, nil, false)\n      _ -> handle_parse(socket, outbound, parse_msg(left_over, false))\n    end\n  end\nend\n')),(0,r.kt)("h3",{id:"serving-downstream"},"Serving downstream"),(0,r.kt)("p",null,"The downstream response is even simpler. We will not parse the message and simply forward the data directly to the socket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.PostgresProxy do\n\n  ...\n\n  def serve_downstream(socket, outbound) do\n    data = outbound |> read_line()\n    :ok = :gen_tcp.send(socket, data)\n\n    serve_downstream(socket, outbound)\n  end\nend\n")),(0,r.kt)("h3",{id:"complete-server"},"Complete server"),(0,r.kt)("p",null,"The complete server is less than 200 lines of code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule Statetrace.PostgresProxy do\n  require Logger\n\n  def accept(port) do\n    {:ok, socket} =\n      :gen_tcp.listen(port, [:binary, active: true, reuseaddr: true, packet: 0, nodelay: true])\n\n    Logger.info("Accepting connections on port #{port}")\n    loop_acceptor(socket)\n  end\n\n  defp loop_acceptor(socket) do\n    {:ok, client} = :gen_tcp.accept(socket)\n\n    {:ok, pid} =\n      Task.Supervisor.start_child(Statetrace.TaskSupervisor, fn ->\n        {:ok, outbound} =\n          :gen_tcp.connect(\'localhost\', 5432, [:binary, active: true, packet: 0, nodelay: true])\n\n        {:ok, pid2} =\n          Task.Supervisor.start_child(Statetrace.TaskSupervisor, fn ->\n            serve_downstream(client, outbound)\n          end)\n\n        :ok = :gen_tcp.controlling_process(outbound, pid2)\n\n        serve_upstream(client, outbound, nil, true)\n      end)\n\n    :ok = :gen_tcp.controlling_process(client, pid)\n\n    loop_acceptor(socket)\n  end\n\n  defp serve_upstream(socket, outbound, nil, is_first) do\n    data = socket |> read_line()\n\n    handle_parse(socket, outbound, parse_msg(data, is_first))\n  end\n\n  defp serve_upstream(socket, outbound, fun, _is_first) do\n    data = socket |> read_line()\n\n    r = fun.(data)\n\n    handle_parse(socket, outbound, r)\n  end\n\n  defp handle_parse(socket, outbound, {:continuation, continuation}) do\n    serve_upstream(socket, outbound, continuation, false)\n  end\n\n  defp handle_parse(socket, outbound, {:ok, {{_msgType, c}, data}, left_over}) do\n    to_send =\n      case c do\n        nil -> data\n        _ -> [c, data]\n      end\n\n    :ok = :gen_tcp.send(outbound, to_send)\n\n    case left_over do\n      "" -> serve_upstream(socket, outbound, nil, false)\n      _ -> handle_parse(socket, outbound, parse_msg(left_over, false))\n    end\n  end\n\n  defp serve_downstream(socket, outbound) do\n    data = outbound |> read_line()\n    :ok = :gen_tcp.send(socket, data)\n\n    serve_downstream(socket, outbound)\n  end\n\n  defp read_line(socket) do\n    receive do\n      {:tcp, ^socket, data} -> data\n    end\n  end\n\n  defp tag_to_msg_type(val) do\n    case val do\n      ?1 -> :msgParseComplete\n      ?2 -> :msgBindComplete\n      ?3 -> :msgCloseComplete\n      ?A -> :msgNotificationResponse\n      ?c -> :msgCopyDone\n      ?C -> :msgCommandComplete\n      ?d -> :msgCopyData\n      ?D -> :msgDataRow\n      ?E -> :msgErrorResponse\n      ?f -> :msgFail\n      ?G -> :msgCopyInResponse\n      ?H -> :msgCopyOutResponse\n      ?I -> :msgEmptyQueryResponse\n      ?K -> :msgBackendKeyData\n      ?n -> :msgNoData\n      ?N -> :msgNoticeResponse\n      ?R -> :msgAuthentication\n      ?s -> :msgPortalSuspended\n      ?S -> :msgParameterStatus\n      ?t -> :msgParameterDescription\n      ?T -> :msgRowDescription\n      ?p -> :msgPasswordMessage\n      ?W -> :CopyBothResponse\n      ?Q -> :msgQuery\n      ?X -> :msgTerminate\n      ?Z -> :msgReadyForQuery\n      ?P -> :msgParse\n      ?B -> :msgBind\n      _ -> :msgNoTag\n    end\n  end\n\n  defp parse_msg(bin, true) do\n    <<len::unsigned-integer-32, _other_rest::binary>> = bin\n\n    case bin do\n      <<msg_body::binary-size(len), final_rest::binary>> ->\n        {:ok, {{:msgStartup, nil}, msg_body}, final_rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(len, {:msgStartup, nil}, bin, data)\n         end}\n    end\n  end\n\n  defp parse_msg(<<c::size(8), rest::binary>>, false) do\n    tag = tag_to_msg_type(c)\n\n    <<len::unsigned-integer-32, _other_rest::binary>> = rest\n\n    case rest do\n      <<msg_body::binary-size(len), final_rest::binary>> ->\n        {:ok, {{tag, c}, msg_body}, final_rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(len, {tag, c}, rest, data)\n         end}\n    end\n  end\n\n  defp handle_continuation(l, tag, other, data) do\n    new_data = other <> data\n\n    case new_data do\n      <<msg_body::binary-size(l), rest::binary>> ->\n        {:ok, {tag, msg_body}, rest}\n\n      _ ->\n        {:continuation,\n         fn data ->\n           handle_continuation(l, tag, new_data, data)\n         end}\n    end\n  end\nend\n')),(0,r.kt)("p",null,"To start it with your application, add it to your supervisor tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"defmodule Statetrace.Application do\n  use Application\n\n  def start(_type, _args) do\n\n    children = [\n      {Task.Supervisor, name: Statetrace.TaskSupervisor},\n      Supervisor.child_spec({Task, fn -> Statetrace.PostgresProxy.accept(5433) end},\n        restart: :permanent\n      )\n\n    ]\n    opts = [strategy: :one_for_one, name: Statetrace.Supervisor]\n    Supervisor.start_link(children, opts)\n  end\nend\n")),(0,r.kt)("h3",{id:"connecting"},"Connecting"),(0,r.kt)("p",null,"Now you can connect to your proxy from postgres clients in every language!"),(0,r.kt)("p",null,"Elixir:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'{:ok, conn} = Postgrex.start_link(host: "localhost", port: 5433, password: "postgres", username: "postgres", database: "postgres")\nPostgrex.query!(conn, "SELECT 1;", [])\n')),(0,r.kt)("p",null,"In Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'conn = psycopg2.connect("dbname=postgres host=localhost port=5433 user=postgres password=postgres")\ncur = conn.cursor()\ncur.execute("SELECT 1;")\n')),(0,r.kt)("h2",{id:"controlling-postgres-statements"},"Controlling Postgres Statements"),(0,r.kt)("p",null,"So you're probabaly asking what can we do with this proxy? If we change our ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_parse"),' function we can "police" the queries made to the upstream server. The format of the query message is simple, it is the query string you submitted with a null byte.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule Statetrace.PostgresProxy do\n  ...\n\n  defp is_query_good?(q) do\n    # In reality you will want something more secure than this\n    String.starts_with?(q, "SELECT")\n  end\n\n  # Use pattern matching to process :msgQuery differently.\n  # The query is prefixed with the length and suffixed with a null byte\n  defp handle_parse(socket, outbound, {:ok, {{:msgQuery, _c}, <<_len::unsigned-integer-32, data::binary>>}, _left_over} = msg) do\n    query = String.trim_trailing(data, <<0>>)\n    Logger.info("Query: #{query}")\n\n    if is_query_good?(query) do\n      do_handle_parse(socket, outbound, msg)\n    else\n      raise "Unauthorized Query"\n    end\n  end\n\n  defp handle_parse(socket, outbound, msg) do\n    do_handle_parse(socket, outbound, msg)\n  end\n\n  defp do_handle_parse(socket, outbound, {:ok, {{_msgType, c}, data}, left_over}) do\n    to_send =\n      case c do\n        nil -> data\n        _ -> [c, data]\n      end\n\n    :ok = :gen_tcp.send(outbound, to_send)\n\n    case left_over do\n      "" -> serve_upstream(socket, outbound, nil, false)\n      _ -> handle_parse(socket, outbound, parse_msg(left_over, false))\n    end\n  end\n\n  defp do_handle_parse(socket, outbound, {:continuation, continuation}) do\n    serve_upstream(socket, outbound, continuation, false)\n  end\nend\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"There is still more to the protocol, but we have shown that with a little patience you can produce a useful proxy that understands the protocol in less than 200 lines of code. Elixir's pattern matching simplifies extracting information from the binary stream and ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_tcp")," makes it simple to deal with sockets."),(0,r.kt)("p",null,"Like what you read? Reach out at ",(0,r.kt)("a",{parentName:"p",href:"mailto:hello@statetrace.com"},"hello@statetrace.com")," to learn more about what we are working on."))}g.isMDXComponent=!0}}]);