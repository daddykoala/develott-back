-- Deploy develott:4.data to pg

BEGIN;

INSERT INTO job (name, description)
VALUES
('Product Owner', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Developpeur(se) Front-End', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Developpeur(se) Back-End', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Developpeur(se) FullStack', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Developpeur(se) Mobile', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Administrateur de base de donnée', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Consultant SEO', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Testeur(se)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Graphiste', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Web-Designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('UX-UI Designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Scrum Master', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Git Master', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Rédacteur Web', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO customer (firstname, lastname, password, email, charte, city, description, profil_picture, is_active, validate, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin, job_id, validation_link)
VALUES
('Abraham', 'Noel', 'pTilwRoKc!4hNzLI', 'Eubert.Marchand@yahoo.fr', 'true','Paris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '1',' '),
('Renaud', 'Rolland', 'p1rcIm!V8h_BYnc1o', 'Anmone.Giraud@gmail.com', 'true', 'Bordeaux', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '2',' '),
('Irina', 'Francois', 'Q3lgQ!zni-smux2ss', 'Francette49@gmail.com', 'true', 'Besançon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '3',' '),
('Almire', 'Paris', 'TdyIzU-B!Qp3ia3Od', 'Rosalie.Olivier99@hotmail.fr', 'true', 'Avignon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '4',' '),
('Alpinien', 'Blanchard', 'C_vjtRHv!lLNkJ5lS', 'Alice.Dupuy@gmail.com', 'true', 'Nîmes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '5',' '),
('Marianne', 'Joly', 'KRDQX0!OL3rA3_kM', 'Amiel_Martin33@yahoo.fr', 'true', 'Rennes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '6',' '),
('Noëlle', 'Lefebvre', '13cc73C!LSkS_8yD', 'Cme90@gmail.com', 'true', 'Neuilly-sur-Seine', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '7',' '),
('Albane', 'Guillot', 'AekOj!kVWvzv2oggA', 'Emma_Boyer@yahoo.fr', 'true', 'Bordeaux', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '5',' '),
('Basilisse', 'Huet', 'rb-Auv1m!3fPKjFQw', 'Tristan.Carre@hotmail.fr', 'true', 'Tours', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '6',' '),
('Léa', 'Henry', 'oM8YoOMF0uyfgU2!', 'Cllie.Dupuy70@hotmail.fr', 'true', 'Montpellier', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'false', 'false', ' ', ' ', ' ', ' ', ' ', '4',' '),
('Charlélie', 'Lecomte', 'rms6!RUNWiALflJd', 'Agilberte.Julien74@gmail.com', 'true', 'Marseille', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '3',' '),
('Hugo', 'Barbier', 'FhwCL_U3Wu!eltnZO', 'Sandrine_Meunier35@hotmail.fr', 'true', 'Brest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '2',' '),
('Clément', 'Guerin', 'JBfUhjkb!fyBHJOoh5uh', 'futurroidelacrypto@hotmail.fr', 'true', 'Nice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '1',' '),
('Pierre-Antoine', 'Barbier', 'AekJHb_nb!gv4BvoggA', 'nom_de_zeus@hotmail.fr', 'true', 'La Rochelle', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', 'true', 'false', ' ', ' ', ' ', ' ', ' ', '2',' ');

INSERT INTO role (name)
VALUES
('admin'),
('participants'),
('candidates');

INSERT INTO project (name, exerpt, description, picture_project, start_date , end_date, url_slack_server, url_github_repo, url_github_projet, url_trello)
VALUES
('Learn(Err)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2023-05-05' ,'2025-05-05', ' ', ' ', ' ', ' '),
('Tournament - Organisez votre tournoi de Bad comme un pro !', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2027-08-18' , '2029-08-18', ' ', ' ', ' ', ' '),
('SONOW - Le Tinder de l''événementiel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2022-09-30' , '2024-09-30', ' ', ' ', ' ', ' '),
('Family business', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2026-03-10' , '2028-03-10', ' ', ' ', ' ', ' '),
('e-commerce F0F project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2023-05-03' , '2025-05-03', ' ', ' ', ' ', ' '),
('Roling Playing Logbook', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2025-11-07' , '2027-11-07', ' ', ' ', ' ', ' '),
('the good choice market', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ', '2023-05-03' , '2025-05-03', ' ', ' ', ' ', ' ');

INSERT INTO project_has_job (project_id, job_id)
VALUES
('1','1'),
('1','2'),
('1','3'),
('1','5'),
('2','3'),
('2','4'),
('2','5'),
('2','8'),
('2','9'),
('3','5'),
('3','8'),
('3','9'),
('4','1'),
('4','2'),
('4','6'),
('5','7'),
('6','6'),
('6','3'),
('7','2'),
('7','4');

INSERT INTO customer_has_project_role (customer_id, project_id, role_id)
VALUES
('1','1','1'),
('2','2','1'),
('3','3','1'),
('4','4','1'),
('5','5','1'),
('6','6','1'),
('7','7','1'),
('8','6','2'),
('9','5','3'),
('10','7','2'),
('11','4','2'),
('12','2','2'),
('13','1','3'),
('14','3','3');

INSERT INTO techno (name)
VALUES
('adonisjs'),
('aftereffects'),
('amazonwebservices'),
('android'),
('androidstudio'),
('aarch64'),
('angularjs'),
('ansible'),
('apache'),
('apachekafka'),
('appcelerator'),
('apple'),
('appwrite'),
('arduino'),
('atom'),
('azure'),
('babel'),
('backbonejs'),
('bamboo'),
('bash'),
('behance'),
('bitbucket'),
('bootstrap'),
('bulma'),
('bower'),
('c'),
('cakephp'),
('canva'),
('centos'),
('ceylon'),
('chrome'),
('circleci'),
('clojure'),
('cmake'),
('clojurescript'),
('codecov'),
('codeigniter'),
('codepen'),
('coffeescript'), 
('composer'),
('confluence'),
('couchdb'),
('cplusplus'),
('csharp'),
('css3'),
('cucumber'),
('crystal'),
('d3js'),
('dart'),
('debian'),
('denojs'),
('devicon'),
('django'),
('docker'),
('doctrine'),
('dot-net'),
('dotnetcore'),
('drupal'),
('digitalocean'),
('discordjs'),
('electron'),
('eleventy'),
('elixir'),
('elm'),
('ember'),
('embeddedc'),
('erlang'),
('eslint'),
('express'),
('facebook'),
('feathersjs'),
('figma'),
('filezilla'),
('firebase'),
('firefox'),
('flask'),
('flutter'),
('foundation'),
('fsharp'),
('gatling'),
('gatsby'),
('rect'),
('gcc'),
('gentoo'),
('gimp'),
('git'),
('github'),
('gitlab'),
('gitter'),
('go'),
('google'),
('googlecloud'),
('gradle'),
('grafana'),
('grails'),
('graphql'),
('groovy'),
('grunt'),
('gulp'),
('godot'),
('haskell'),
('handlebars'),
('haxe'),
('heroku'),
('html5'),
('hugo'),
('ie10'),
('ifttt'),
('illustrator'),
('inkscape'),
('intellij'),
('ionic'),
('jamstack'),
('jasmine'),
('java'),
('javascript'),
('jeet'),
('jest'),
('jenkins'),
('jetbrains'),
('jira'),
('jquery'),
('julia'),
('jupyter'),
('kaggle'),
('karma'),
('kotlin'),
('knockout'),
('krakenjs'),
('kubernetes'),
('labview'),
('laravel'),
('latex'),
('less'),
('linkedin'),
('lua'),
('linux'),
('materialui'),
('matlab'),
('magento'),
('markdown'),
('maya'),
('meteor'),
('minitab'),
('mocha'),
('modx'), 
('mongodb'),
('moodle'),
('msdos'),
('mysql'),
('neo4j'),
('nestjs'),
('networkx'),
('nextjs'),
('nginx'),
('nixos'),
('nodejs'),
('nodewebkit'),
('npm'),
('nuget'),
('numpy'),
('nuxtjs'),
('objectivec'),
('opera'),
('ocaml'),
('openal'),
('opengl'),
('opensuse'),
('oracle'),
('pandas'),
('perl'),
('phalcon'),
('photoshop'),
('php'),
('phpstorm'),
('podman'),
('polygon'),
('postgresql'),
('premierepro'),
('processing'),
('protractor'),
('putty'),
('pycharm'),
('python'),
('pytorch'),
('raspberrypi'),
('phoenix'),
('qt'),
('r'),
('rails'),
('react'),
('redhat'),
('redis'),
('redux'),
('rocksdb'),
('ruby'),
('rubymine'),
('rust'),
('safari'),
('salesforce'),
('sdl'),
('rstudio'),
('sass'),
('scala'),
('selenium'),
('sequelize'),
('shopware'),
('shotgrid'),
('sketch'),
('slack'),
('socketio'),
('solidity'),
('sourcetree'),
('spring'),
('spss'),
('sqlalchemy'),
('sqlite'),
('subversion'),
('microsoftsqlserver'),
('ssh'),
('stylus'),
('svelte'),
('swift'),
('symfony'),
('storybook'),
('tailwindcss'),
('tensorflow'),
('terraform'),
('threejs'),
('tomcat'),
('tortoisegit'),
('towergit'),
('travis'),
('thealgorithms'),
('trello'),
('twitter'),
('typescript'),
('typo3'),
('ubuntu'),
('unity'),
('unix'),
('unrealengine'),
('uwsgi'),
('vagrant'),
('vim'),
('visualstudio'),
('vuejs'),
('vuestorefront'),
('vscode'),
('webflow'),
('weblate'),
('webpack'),
('webstorm'),
('windows8'),
('woocommerce'),
('wordpress'),
('xamarin'),
('xcode'),
('xd'),
('yarn'),
('yii'),
('yunohost'),
('zend'), 
('zig'),
('pytest'),
('opencv'),
('fastapi'),
('k3s'),
('packer'),
('anaconda'),
('rspec'),
('argocd'),
('prometheus'),
('blender'),
('dropwizard'),
('vuetify'),
('fedora');

INSERT INTO project_has_techno (project_id, techno_id)
VALUES
('1','1'),
('1','2'),
('1','3'),
('1','5'),
('2','3'),
('2','4'),
('2','5'),
('2','8'),
('2','9'),
('3','5'),
('3','8'),
('3','9'),
('4','1'),
('4','2'),
('4','6'),
('5','7'),
('6','6'),
('6','3'),
('7','2'),
('7','4');

INSERT INTO customer_has_techno (customer_id, techno_id)
VALUES
('1','1'),
('2','2'),
('3','3'),
('4','4'),
('5','5'),
('6','6'),
('7','7'),
('8','6'),
('9','5'),
('10','7'),
('11','4'),
('12','2'),
('13','3'),
('14','3');

COMMIT;
