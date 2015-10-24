$('body').append('<div id="cpContainer"></div>');

var gh_username, gh_pas, gh_url, gh_path, gh_path_len, gh_commit_msg, gh_path_pieces, gh_data;

OAuth.initialize('qg3uN6ehTJYw_uXad1AO8iki2WA');

githubLogin.onclick = function() {
  console.log('check');
      OAuth.popup('github', {cache: true})
        .done(function(result){
          console.log(result.access_token);
          gh_pas = result.access_token;
          
          result.me().done(function(data){
              console.log(data.alias);
              gh_username = data.alias;
          });
      
      })
        .fail(function(err){
          console.log(err)
      });
}