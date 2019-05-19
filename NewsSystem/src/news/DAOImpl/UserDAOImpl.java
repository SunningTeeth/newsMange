package news.DAOImpl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import news.DAO.UserDAO;
import news.domainProject.User;

public class UserDAOImpl implements UserDAO{

	private SessionFactory sf;
	
	public SessionFactory getSf() {
		return sf;
	}

	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	

	@Override
	public void update(User user) {
		Session sess=sf.getCurrentSession();
		sess.update(user);
	}

	@Override
	public void updatePassById(int id, String pass) {
		Session sess=sf.getCurrentSession();
		sess.createQuery("update User set password=:password where id=:id").setParameter("password", pass).setParameter("id", id).executeUpdate();
	}

	@Override
	public User selectById(int id) {
		Session sess=sf.getCurrentSession();
		List<User> list=sess.createQuery("select u from User as u where id=:id").setParameter("id", id).getResultList();
		return list.size()>0?list.get(0):null;
	}

	@Override
	public User selectByPhone(String phone) {
		Session sess=sf.getCurrentSession();
		List<User> list=sess.createQuery("select u from User as u where phone=:phone").setParameter("phone", phone).getResultList();
		return list.size()>0?list.get(0):null;
	}

	@Override
	public String selectPassByPhone(String phone) {
		Session sess=sf.getCurrentSession();
		List<String> list=sess.createQuery("select password from User where phone=:phone").setParameter("phone", phone).getResultList();
		return list.size()>0?list.get(0):null;
	}

	@Override
	public void deleteById(int id) {
		Session sess=sf.getCurrentSession();
		sess.createQuery("delete from User where id=:id").setParameter("id", id).executeUpdate();
	}

	@Override
	public void delete(User user) {
		Session sess=sf.getCurrentSession();
		sess.delete(user);
	}

	@Override
	public int add(User user) {
		Session sess=sf.getCurrentSession();
		return (int) sess.save(user);
	}

	
}
