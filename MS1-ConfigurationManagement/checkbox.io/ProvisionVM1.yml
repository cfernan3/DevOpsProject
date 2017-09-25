---
- hosts: localhost
  sudo: yes

  tasks:
    - name: removing vagrant VM1 directory if existing
      file:
        state: absent
        path: "/home/vagrant/VM1"

    - name: creating directory for vagrant VM1
      file:
        path: "/home/vagrant/VM1"
        state: directory
        owner: "{{ lookup('env','USER') }}"
        mode: 0775

    - name: intialising vagrant directory
      command: "vagrant init"
      args:
        chdir: "/home/vagrant/VM1"

    - name: copying vagrant files to VM1 directory
      copy:
        src: /home/vagrant/checkbox.io/Vagrantfile
        dest: /home/vagrant/VM1/
        owner: vagrant
        mode: 0644
 
    - name: Do vagrant up
      become: yes
      command: chdir=/home/vagrant/VM1 vagrant up
