//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//** Recursive Solution **//
function reverse(str){
  if (str.length === 0) {
      return ''
  }
  return reverse(str.slice(1)) + str[0];
}