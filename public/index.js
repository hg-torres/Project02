async function logoutUser() {
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  location = '/login.html'
}

async function getProfile() {
  try {
    const { data: user } = await axios.get('/api/users/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    return user

  } catch (err) {
    location = '/login.html'
  }
}