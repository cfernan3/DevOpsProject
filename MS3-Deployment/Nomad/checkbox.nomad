job "checkboxio" {
  datacenters = [ "dc1" ]
  group "default" {
    count = 1
    task "run-server.js"        {
      driver = "raw_exec"
      resources {
        memory = 512
      }
      config {
        command= "/bin/sh"
        args= [
        "-c",
        "cd /home/ubuntu/checkbox.io/server-side/site && node server.js" ],
      }
    }
  }
}
