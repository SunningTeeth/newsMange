package news.serviceImpl;

import news.DAO.UserDAO;
import news.domainProject.User;
import news.service.UserService;

public class UserServiceImpl implements UserService{

	private UserDAO userDAO;
	
	
	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	@Override
	public int add(User user) {
		return userDAO.add(user);
	}
	@Override
	public void update(User user) {
		userDAO.update(user);
	}

	@Override
	public void updatePassById(int id, String pass) {
		userDAO.updatePassById(id, pass);
	}

	@Override
	public User selectById(int id) {
		return userDAO.selectById(id);
	}

	@Override
	public User selectByPhone(String phone) {
		return userDAO.selectByPhone(phone);
	}

	@Override
	public String selectPassByPhone(String phone) {
		return userDAO.selectPassByPhone(phone);
	}

	@Override
	public void deleteById(int id) {
		userDAO.deleteById(id);
		
	}

	@Override
	public void delete(User user) {
		userDAO.delete(user);
		
	}

}
