/**
 * Scopes enable your application to access specific API endpoints on behalf of a user. 
 * The set of scopes you pass in your call determines the access permissions 
 * that the user is required to grant.
 * The following code generates a request for the scopes user-read-private and user-read-email:
 * User will be redirected to spotify login page saved in the project as "oauth.png"
 */
// TODO: replace my_client_id with user client id
app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });