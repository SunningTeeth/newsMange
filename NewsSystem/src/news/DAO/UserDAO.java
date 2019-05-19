package news.DAO;

import news.domainProject.User;

public interface UserDAO {

	public int add(User user);
	public void update(User user);
	public void updatePassById(int id,String pass);
	public User selectById(int id);
	public User selectByPhone(String phone);
	public String selectPassByPhone(String phone);
	public void deleteById(int id);
	public void delete(User user);
}
