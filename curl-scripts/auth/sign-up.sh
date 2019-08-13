# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
# double, single, double, dollar sign, curly braces

# don't use a password you use for any real websites!
curl "https://sei-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
