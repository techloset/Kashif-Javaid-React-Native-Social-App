const fetchUsers = async () => {
  try {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      // Handle the case where the user is not logged in
      return;
    }

    const userId = currentUser.uid;
    const response = await db
      .collection('Images')
      .where('userId', '==', userId)
      .get();

    const fetchData = response.docs.map(doc => doc.data());
    setData(fetchData);
    console.log(fetchData);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export function useProfile() {
  return {};
}
