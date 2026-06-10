import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(' ');
    if (!token || !token.startsWith('Bearer')) {
      return res.status(401).send('Unauthorized');
    }
    const decoded = jwt.verify(token, 'secret');

    req.user = decoded;
    
    next();

  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
}