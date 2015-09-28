# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'artust-static'
set :repo_url, 'git@github.com:lacostenycoder/artuspt-deploy.git'
set :scm, :git

set :ssh_options {
  user: 'artus_deploy'
}

set :location ""
role :app, location
role :web, location
set :user, "artus_deploy"

set :format, :pretty
set :log_level, :debug 
set :keep_releases, 5

namespace :deploy do

  after :finishing, 'deploy-cleanup'

  # after :restart, :clear_cache do
    # on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    # end
  # end

end
